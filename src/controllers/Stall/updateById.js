const { updateById } = require("../../models/Stall");

module.exports = async function (req, res) {
  const { stall_vacant, stall_name, stall_skill } = req.body;

  const stall_id = req.params.id;

  const { result, state } = await updateById({
    stall_id,
    stall_vacant,
    stall_name,
    stall_skill,
  });

  if (state) {
    res.json({ status: true, data: result });
    return;
  }

  res.json({ status: false, data: [] });
};
