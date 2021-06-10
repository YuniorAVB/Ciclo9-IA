module.exports = async function (agente) {
  let jsonSend = { data: [], type: "welcome" };

  jsonSend.data = [
    { intent: "createPostulant", label: "POSTULAR", img: "postulante.png" },
    { intent: "stallFree", label: " VACANTES", img: "puestos.png" },
    { intent: "stallTracking", label: "TRACKING", img: "tracking.png" },
  ];

  await agente.add(JSON.stringify(jsonSend));
};
