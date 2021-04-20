const { readById } = require("../../models/Stall");

module.exports = async function (req, res) {
  const stall_id = req.params.id;

  const { result, state } = await readById({
    id: stall_id,
  });

  if (state) {
    res.json({ status: true, data: result });
    return;
  }

  res.json({ status: false, data: [] });
};
