const path = require("path");
module.exports = function (req, res) {
  const fileVideo = req.files.file;
  const nameFile = uuid.v4() + ".webm";
  const uploadPath = path.join(
    __dirname,
    "../",
    "../",
    "public",
    "video",
    nameFile
  );

  fileVideo.mv(uploadPath, function (error) {
    if (!error) {
      return res.json({ status: true, name: nameFile });
    }

    return res.json({ status: false });
  });
};
