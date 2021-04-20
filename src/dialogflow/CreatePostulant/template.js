module.exports = function ({ name, id }) {
  return `<div>
    <h1>Buenas, ${name}</h1>
    <p>Felicidades su registro de postulacion a nuestra empresa Beta
     fue realizado</p>
     <a href="http://localhost:8080/#/tracking/${id}" style="color:green;font-size:30px"> 
     Realizar Seguimiento</a>
    </div>`;
};
