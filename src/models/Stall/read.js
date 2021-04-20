module.exports = function () {
  return new Promise((resolve, reject) => {
    conexion.query("SELECT * FROM stall", function (error, result) {
      if (error) {
        reject({ state: false, result: null });
      }

      resolve({ state: true, result });
    });
  });
};
