module.exports = function ({ stall_skill, stall_name, stall_vacant }) {
  return new Promise((resolve, reject) => {
    conexion.query(
      "INSERT  INTO stall (stall_id,stall_skill,stall_name,stall_vacant)  VALUES (?,?,?,?)",
      [uuid.v4(), stall_skill, stall_name, stall_vacant],
      function (error, result) {
        if (error) {
          reject({ state: false, result: null });
        }

        resolve({ state: true, result });
      }
    );
  });
};
