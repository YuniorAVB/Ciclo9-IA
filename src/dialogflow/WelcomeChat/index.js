module.exports = function (agente) {
  let jsonSend = { data: [], type: "welcome" };

  jsonSend.data = [
    { intent: "createPostulant", label: "POSTULAR", img: "postulante.png" },
    { intent: "stallFree", label: " VACANTES", img: "puestos.png" },
    { intent: "stallTracking", label: "TRACKING", img: "tracking.png" },
  ];

  return agente.add(JSON.stringify(jsonSend));
};
