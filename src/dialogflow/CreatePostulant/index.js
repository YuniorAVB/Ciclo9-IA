const { create } = require("../../models/Postulant");
const downloadPdf = require("../../utils/downloadPdf");
const validUrl = require("valid-url");
const sendMail = require("../../utils/sendMail");
const templateMessage = require("./template");

module.exports = async function (agente) {
  try {
    const postulant_dni = agente.parameters["dni"];
    const postulant_name = agente.parameters["name"];
    const postulant_last_name = agente.parameters["last_name"];
    const postulant_email = agente.parameters["email"];
    const postulant_url_cv = agente.parameters["url_cv"];

    if (!validUrl.isUri(postulant_url_cv)) {
      return agente.add("Ups... La Url no es Valida!!");
    }

    const result = await downloadPdf({ url: postulant_url_cv });

    if (!result.state) {
      return agente.add("Ups... Ocurrio un error, intentelo mas Tarde!!");
    }

    const { state } = await create({
      postulant_dni,
      postulant_email,
      postulant_last_name,
      postulant_name,
      postulant_url_cv: result.name,
    });
    if (state) {
      await sendMail({
        to: postulant_email,
        subject: "Confirmacion de Postulacion",
        message: templateMessage({
          name: postulant_name,
          id: postulant_dni,
        }),
      });

      return agente.add(
        "Felicidades ya estas Registrado, le enviaremos un correo de confirmacion"
      );
    }
  } catch (error) {
    return agente.add("Ups... Ocurrio un error, intentelo mas Tarde!!");
  }
};
