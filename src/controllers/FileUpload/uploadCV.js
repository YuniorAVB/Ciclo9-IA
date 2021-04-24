const path = require("path");
module.exports = function (req, res) {
  const fileCV = req.files.file;
  const nameFile = uuid.v4() + ".pdf";
  const uploadPath = path.join(
    __dirname,
    "../",
    "../",
    "public",
    "cv",
    nameFile
  );

  fileCV.mv(uploadPath, function (error) {
    if (!error) {
      return res.json({ status: true, name: nameFile });
    }

    return res.json({ status: false });
  });
};
