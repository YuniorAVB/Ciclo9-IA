module.exports = function ({}) {
  return new Promise((resolve, reject) => {
    conexion.query(
      "UPDATE  stall SET stall_name = ?,stall_vacant = ?,stall_skill = ? WHERE  stall_id LIKE ?",
      [skill_words, uuid.v4()],
      function (error, result) {
        if (error) {
          reject({ state: false, result: null });
        }

        resolve({ state: true, result });
      }
    );
  });
};
