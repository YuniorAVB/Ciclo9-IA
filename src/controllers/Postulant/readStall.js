const { read } = require("../../models/Postulant");
const { readById } = require("../../models/Stall");
const filterStall = require("../../utils/FindWordKey");

function callFilterStall(resultStall, skillWords) {
  return new Promise((resolve, reject) => {
    let index = 0;
    let newResult = [];
    async function filter() {
      if (index == resultStall.length) {
        resolve(newResult);
      }

      if (index < resultStall.length) {
        const resValidCV = await filterStall({
          url: resultStall[index].postulant_url_cv,
          keysSearch: skillWords,
        });
        if (resValidCV.key) {
          newResult.push(resultStall[index]);
        }
        index++;
        filter();
      }
    }
    filter();
  });
}

module.exports = async function (req, res) {
  const idStall = req.params.id;

  const resultPostulant = await read();
  const resultStall = await readById({ id: idStall });

  if (resultPostulant.state && resultStall.state) {
    const skillData = JSON.parse(resultStall.result[0].stall_skill);

    const skillWords = skillData.data.reduce((acc, item) => {
      return [...acc, item.name];
    }, []);

    const result = await callFilterStall(resultPostulant.result, skillWords);

    res.json({ status: true, data: result });
    return;
  }

  res.json({ status: false, data: [] });
};
