const dbConnection = require('../database/db');

// Controlador para manejar la ruta '/requests'
function getRequests(req, res) {

  dbConnection.query('SELECT * FROM peticiones', (err, resultados) => {
    if (err) {
      console.error('Error al ejecutar la consulta: ', err);
      res.status(500).send('Error interno del servidor');
      return;
    }
    res.json(resultados);
  });
}

// Función para insertar una nueva novedad en la tabla seguimiento
function insertarNovedad(req, res) {
    const seg_fecha = new Date();
    const  seg_descripcion = req.body.seg_descripcion;
    const sql = 'INSERT INTO seguimientos (seg_descripcion, seg_fecha) VALUES (?,?)';
    dbConnection.query(sql, [seg_descripcion, seg_fecha], (err, resultado) => {
      if (err) {
        console.error('Error al insertar seguimiento: ', err);
        res.status(500).send('Error interno del servidor');
        return;
      }
      res.json(resultado);
    });
  }

  module.exports = {
    insertarNovedad
  };