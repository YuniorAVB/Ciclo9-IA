const express = require("express");

const app = express();

//CONFIGURANDO EL SERVIDOR
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//IMPORTANDO RUTAS
app.use(require("./routes/index"));

app.listen(4000, () => console.log("SERVIDOR CORRIENDO"));
