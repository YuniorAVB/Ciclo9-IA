const { readByDni } = require("../../models/Postulant");

module.exports = async function (req, res) {
  const id = req.params.id;
  const { result, state } = await readByDni({ id });

  if (state) {
    res.json({ status: true, data: result });
    return;
  }

  res.json({ status: false, data: [] });
};
