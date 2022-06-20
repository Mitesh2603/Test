let score = () => {
  define(["require", "fs"], function (require) {
    var namedModule = require("fs");
  });
  fetch("https://ghibliapi.herokuapp.com/films")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.sort((a, b) => a.rt_score - b.rt_score);
      console.log(data);

      for (let x in data) {
        document.write(
          `<br> <b>Movie Name :</b> ${data[x].title} <br><b> Producer : </b>${data[x].producer}<br>`
        );
      }

      // let dataString = JSON.stringify(data);
      // let file = new Blob([dataString], { type: "text" });
      // var anchor = document.createElement("a");
      // anchor.href = URL.createObjectURL(file);
      // anchor.download = "download.txt";
      // anchor.click();
    });
};
