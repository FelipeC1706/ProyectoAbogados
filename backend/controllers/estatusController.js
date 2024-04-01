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

// Función para hacer el cambio de estado de una petición
function cambioEstado(req, res) {
    const his_fecha = new Date();
    const { pet_id, est_id, his_descripcion } = req.body;
    const sql = 'INSERT INTO historial_estado (est_id, pet_id, his_fecha, his_descripcion) VALUES (?,?,?,?)';
    dbConnection.query(sql, [est_id, pet_id, his_fecha, his_descripcion], (err, resultado) => {
      if (err) {
        console.error('Error al hacer el cacmbio de estado: ', err);
        res.status(500).send('Error interno del servidor');
        return;
      }
      res.json(resultado);
    });
  }

module.exports = {
    cambioEstado
};