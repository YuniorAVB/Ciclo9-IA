const { read } = require("../../models/Stall");
const { Suggestion } = require("dialogflow-fulfillment");

module.exports = async function (agente) {
  try {
    const stallList = await read();

    let message = "Bienvenidos";

    console.log(stallList.result);

    stallList.result.forEach((item) => {
      message += `\n PUESTO: ${item.stall_name} \n 
                  SKILL:Java \n`;
    });

    return agente.add(message);
  } catch (error) {
    console.log(error);
  }
};
