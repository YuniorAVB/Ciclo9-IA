module.exports = function ({
  postulant_dni,
  postulant_name,
  postulant_last_name,
  postulant_email,
  postulant_url_cv,
}) {
  return new Promise((resolve, reject) => {
    conexion.query(
      "INSERT  INTO postulant (postulant_id,postulant_dni,postulant_name,postulant_last_name,postulant_email,postulant_url_cv)  VALUES (?,?,?,?,?,?)",
      [
        uuid.v4(),
        postulant_dni,
        postulant_name,
        postulant_last_name,
        postulant_email,
        postulant_url_cv,
      ],
      function (error, result) {
        if (error) {
          reject({ state: false, result: null });
        }

        resolve({ state: true, result });
      }
    );
  });
};
