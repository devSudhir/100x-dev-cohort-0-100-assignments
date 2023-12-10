const fs = require("fs");
function readFromAFileAndWriteToAFile(sourcePath, destinationPath) {
  fs.readFile(sourcePath, "utf-8", function (error, data) {
    if (error) {
      console.log("Error reading file from path :" + sourcePath);
    } else {
      fs.writeFile(destinationPath, data, function () {
        console.log("file write successfull");
      });
    }
  });
}

readFromAFileAndWriteToAFile("./a.txt", "./b.txt");
