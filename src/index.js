const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const expressFileUpload = require("express-fileupload");

const { postulant, stall, fileUpload } = require("./routes");

const app = express();

//IMPORTANDO MODULOS BOOT
require("./boot");
require("dotenv").config();

//CONFIGURANDO EL SERVIDOR
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));
app.use(expressFileUpload());

app.use(express.static(path.join(__dirname, "public")));

//IMPORTANDO RUTAS
app.use("/api", postulant);
app.use("/api", stall);
app.use("/api", fileUpload);

app.post("/api/test", async function (req, res) {
  try {
    const test = require("./dialogflow/test");
    const { userQuery, userId } = req.body;
    const data = await test({ userQuery, userId });
    res.json({ data });
  } catch (error) {
    console.log(error);
  }
});

app.use("/api", require("./dialogflow"));

console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);

app.listen(4000, () => console.log("SERVIDOR CORRIENDO"));
