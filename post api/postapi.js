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

let select = null;
let myFunc = () => {
  if (select == null) {
    data();
  } else {
    update();
    select = null;
  }
};

let data = () => {
  let name = document.getElementById("name").value;
  let job = document.getElementById("job").value;
  let table = document.getElementById("table");
  document.getElementById("table").style.display = "block";

  let row = table.insertRow(-1);
  let nm = row.insertCell(0);
  let jb = row.insertCell(1);
  let up = row.insertCell(2);
  nm.innerHTML = document.getElementById("name").value;
  jb.innerHTML = document.getElementById("job").value;
  up.innerHTML = `<a class="edt" id="edt" onclick="edit(this)">Edit</a>`;

  if (name === "" && job === "") {
    alert("Name and Job must required");
    return false;
  }
  if (!isNaN(name) && !isNaN(job)) {
    alert("Number not allowed");
    return false;
  }
  fetch("https://reqres.in/api/users", {
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
  document.getElementById("name").value = "";
  document.getElementById("job").value = "";
  edit();
};

let edit = (x) => {
  select = x.parentElement.parentElement;
  document.getElementById("name").value = select.cells[0].innerHTML;
  document.getElementById("job").value = select.cells[1].innerHTML;
};
let update = () => {
  select.cells[0].innerHTML = document.getElementById("name").value;
  select.cells[1].innerHTML = document.getElementById("job").value;
};
