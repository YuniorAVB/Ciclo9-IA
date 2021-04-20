module.exports = function ({ id }) {
  return new Promise((resolve, reject) => {
    conexion.query(
      "SELECT * FROM stall WHERE stall_id LIKE ?",
      [id],
      function (error, result) {
        if (error) {
          reject({ state: false, result: null });
        }

        resolve({ state: true, result });
      }
    );
  });
};
