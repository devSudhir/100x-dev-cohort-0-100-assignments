const fs = require("fs");

function cleanFile(path) {
  fs.readFile(path, "utf-8", function (error, data) {
    if (error) {
      console.log("Error reading file");
    } else {
      console.log(data);
      let splitData = data.split(" ");
      let cleanData = splitData.filter(function (element) {
        return element != "";
      });

      console.log(cleanData);

      fs.writeFile(path, cleanData.join(" "), function () {
        console.log("Success writting file");
      });
    }
  });
}

cleanFile("./clean-file.txt");
