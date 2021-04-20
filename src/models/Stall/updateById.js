module.exports = function ({
  stall_name,
  stall_vacant,
  stall_skill,
  stall_id,
}) {
  return new Promise((resolve, reject) => {
    conexion.query(
      "UPDATE stall SET  stall_name=?, stall_vacant = ?, stall_skill =? WHERE stall_id LIKE ?",
      [stall_name, stall_vacant, stall_skill, stall_id],
      function (error, result) {
        if (error) {
          reject({ state: false, result: null });
        }

        resolve({ state: true, result });
      }
    );
  });
};
