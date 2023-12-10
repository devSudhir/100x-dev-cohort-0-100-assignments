const fs = require("fs");

function readFile(path) {
  fs.readFile(path, "utf-8", function (error, data) {
    if (error) {
      console.log("Error reading file");
    } else {
      console.log(data);
    }
  });
}

readFile("./a.txt");

for (let i = 0; i < 1000000; i++) {
  if (i == 999999) {
    console.log(i);
  }
}
