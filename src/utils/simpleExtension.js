module.exports = function (type) {
  const types = {
    "application/pdf": "pdf",
  };
  if (types.hasOwnProperty(type)) {
    return types[type];
  }
  return ".txt";
};
