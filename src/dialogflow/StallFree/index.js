const { read } = require("../../models/Stall");

module.exports = async function (agente) {
  const stallList = await read();

  let jsonSend = { data: [], type: "stallFree" };

  function getNamesSkills(json) {
    const dataJson = JSON.parse(json);
    return dataJson.data.reduce((acc, ele) => {
      return [...acc, ele.name];
    }, []);
  }

  stallList.result.forEach((item) => {
    jsonSend.data.push({
      stall_name: item.stall_name,
      stall_skill: getNamesSkills(item.stall_skill),
      stall_vacant: item.stall_vacant,
    });
  });

  return agente.add(JSON.stringify(jsonSend));
};
