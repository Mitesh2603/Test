window.onload = () => {
  const tbody = document.getElementById("tb");
  let store = localStorage.getItem("users");
  let scr = JSON.parse(store);
  // console.log(scr);
  if (scr === null) {
    table.style.display = "none";
  }

  scr.map((data) => {
    let tr = document.createElement("tr");
    // console.log(tr);
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        let td = document.createElement("td");
        td.innerHTML = `${data[key]}`;
        tr.appendChild(td);
      }
    }
    tbody.appendChild(tr);
  });
};
let id = "";
let select = null;
let myFunc = () => {
  if (select == null) {
    data();
  } else {
    update();
    // edit();
    select = null;
    // let std = getCrudData();
    // std[id] = name;
    // std[id] = job;
    // setCrudData(std);
  }
};

let data = () => {
  let name = document.getElementById("name").value;
  let job = document.getElementById("job").value;
  if (name === "") {
    alert("Name must required");
    return false;
  } else if (job === "") {
    alert("Job must required");
    return false;
  }

  let table = document.getElementById("table");
  document.getElementById("table").style.display = "block";

  let row = table.insertRow(-1);
  let nm = row.insertCell(0);
  let jb = row.insertCell(1);
  let up = row.insertCell(2);
  let dl = row.insertCell(3);
  nm.innerHTML = document.getElementById("name").value;
  jb.innerHTML = document.getElementById("job").value;
  up.innerHTML = `<a class="edt" id="edt" onclick="edit(this)">Edit</a>`;
  dl.innerHTML = `<a class="dlt" id="dlt" onclick="delet(this)">Delete</a>`;

  fetch("https://reqres.in/api/users/2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      job: job,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      let store = new Array();
      store = JSON.parse(localStorage.getItem("users"))
        ? JSON.parse(localStorage.getItem("users"))
        : [];
      store.push({
        name: data.name,
        job: data.job,
      });
      localStorage.setItem("users", JSON.stringify(store));
    });
  clearInput();
  edit();
};

let delet = (rid) => {
  let std = getCrudData();
  std.splice(rid, 1);
  setCrudData(std);
};

let edit = (x) => {
  // id = x;
  // let std = getCrudData();
  // document.getElementById("name").value = std[x];
  // document.getElementById("job").value = std[x];

  select = x.parentElement.parentElement;
  document.getElementById("name").value = select.cells[0].innerHTML;
  document.getElementById("job").value = select.cells[1].innerHTML;
};
let update = () => {
  select.cells[0].innerHTML = document.getElementById("name").value;
  select.cells[1].innerHTML = document.getElementById("job").value;
};

let clearInput = () => {
  document.getElementById("name").value = "";
  document.getElementById("job").value = "";
};

let getCrudData = () => {
  let store = JSON.parse(localStorage.getItem("users"));
  return store;
};

let setCrudData = (arr) => {
  localStorage.setItem("users", JSON.stringify(arr));
};
