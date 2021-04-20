const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const { postulant, stall } = require("./routes");

const app = express();

//IMPORTANDO MODULOS BOOT
require("./boot");

//CONFIGURANDO EL SERVIDOR
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "public")));

//IMPORTANDO RUTAS
app.use("/api", postulant);
app.use("/api", stall);

app.use("/api", require("./dialogflow"));

app.listen(4000, () => console.log("SERVIDOR CORRIENDO"));
