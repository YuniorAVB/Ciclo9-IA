const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

//CONFIGURANDO EL SERVIDOR
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

//IMPORTANDO RUTAS
app.use(require("./routes/index"));

app.listen(4000, () => console.log("SERVIDOR CORRIENDO"));
