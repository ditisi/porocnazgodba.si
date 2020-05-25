const tinify = require("tinify");
tinify.key = "EXU1Z2ETL8ThVZdHg68qIaWTYJD2H2dR";

var fs = require("fs");

function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function (err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function (filename) {
      fs.readFile(dirname + filename, "utf-8", function (err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
}

let folder = "../assets/img/";
readFiles(
  folder,
  function (filename) {
    tinify.fromFile(folder + filename).toFile(folder + filename);
  },
  function (err) {
    throw err;
  }
);
