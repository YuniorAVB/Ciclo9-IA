const { create } = require("../../models/Postulant");

module.exports = async function (agente) {
  const postulant_dni = agente.parameters["dni"];
  const postulant_name = agente.parameters["name"];
  const postulant_last_name = agente.parameters["last_name"];
  const postulant_email = agente.parameters["email"];
  const postulant_url_cv = agente.parameters["url_cv"];

  const { state } = await create({
    postulant_dni,
    postulant_email,
    postulant_last_name,
    postulant_name,
    postulant_url_cv,
  });

  if (state) {
    return agente.add(
      "Felicidades ya estas Registrado, le enviaremos un correo de confirmacion"
    );
  }

  return agente.add("Ups... Ocurrio un error, intentelo mas Tarde!!");
};
