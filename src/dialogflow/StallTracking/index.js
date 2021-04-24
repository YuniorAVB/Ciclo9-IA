const { readByDni } = require("../../models/Postulant");

module.exports = async function (agente) {
  const postulant_dni = agente.parameters["dni"];

  const { result, state } = await readByDni({ id: postulant_dni });
  if (state) {
    if (result.length == 0) {
      agente.add("Lo sentimos usted no esta registrado");
    } else {
      if (result[0].postulant_qualified == 0) {
        agente.add("Su Proceso de Postulacion sigue en proceso");
      }
    }
  } else {
    agente.add("Ups... Ocurrio un Error");
  }
};
