const download = require("download-pdf");
const path = require("path");

module.exports = function ({ url }) {
  return new Promise((resolve, reject) => {
    const name = uuid.v4() + ".pdf";
    const options = {
      directory: path.join(__dirname, "../", "public", "cv"),
      filename: name,
    };

    console.log(options);
    download(url, options, function (err) {
      if (err) {
        console.log("Error");
        reject({ state: false, name: null });
      }
      resolve({ state: true, name });
    });
  });
};
