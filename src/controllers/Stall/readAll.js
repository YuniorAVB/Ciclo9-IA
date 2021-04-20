const { read } = require("../../models/Stall");

module.exports = async function (req, res) {
  const { result, state } = await read();

  if (state) {
    res.json({ status: true, data: result });
    return;
  }

  res.json({ status: false, data: [] });
};
