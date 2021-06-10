module.exports = function ({
  postulant_dni,
  postulant_name,
  postulant_last_name,
  postulant_email,
  postulant_url_cv,
  postulant_url_video,
}) {
  return new Promise((resolve, reject) => {
    const id = uuid.v4();

    conexion.query(
      "INSERT  INTO postulant (postulant_id,postulant_dni,postulant_name,postulant_last_name,postulant_email,postulant_url_cv,postulant_url_video)  VALUES (?,?,?,?,?,?,?)",
      [
        id,
        postulant_dni,
        postulant_name,
        postulant_last_name,
        postulant_email,
        postulant_url_cv,
        postulant_url_video,
      ],
      function (error, result) {
        if (error) {
          reject({ state: false, result: null });
        }

        resolve({ state: true, result, id });
      }
    );
  });
};
