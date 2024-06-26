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

function getRequestsLawyer(req, res) {
  const abo_documento = req.params.abo_documento;
  const query = 'SELECT p.pet_id, p.pet_descripcion, p.pet_fecha_registro, p.pet_fecha_respuesta, tp.tipo_pe_id, tp.tipo_pe_descripcion, p.abo_documento,c.id_clientes,'+
   'CONCAT(c.cli_nombre," ",c.cli_apellidos) as cliente, s.seg_id, s.seg_descripcion, p.pet_prioridad FROM peticiones p join tipo_peticiones tp on p.tipo_pe_id = tp.tipo_pe_id'+
   ' JOIN clientes c on p.id_clientes = c.id_clientes JOIN seguimientos s on p.seg_id = s.seg_id where p.abo_documento = ?';
  dbConnection.query(query, [abo_documento],(err, resultados) => {
    if (err) {
      console.error('Error al ejecutar la consulta: ', err);
      res.status(500).send('Error interno del servidor');
      return;
    }
    res.json(resultados);
  });
}

function updateRequest(req, res) {
  const { id } = req.params;
  const { documento, prioridad } = req.body;

  const sqlQuery = `
    UPDATE peticiones 
    SET 
      abo_documento = COALESCE(?, abo_documento), 
      pet_prioridad = COALESCE(?, pet_prioridad) 
    WHERE pet_id = ?
  `;

  const values = [
    documento !== undefined ? documento : null,
    prioridad !== undefined ? prioridad : null,
    id
  ];

  dbConnection.query(sqlQuery, values, (err, resultados) => {
    if (err) {
      console.error('Error al ejecutar la consulta: ', err);
      res.status(500).send('Error interno del servidor');
      return;
    }
    if (resultados.affectedRows === 0) {
      res.status(404).send('Peticion no encontrada');
    } else {
      res.status(200).send('Peticion actualizada correctamente');
    }
  });
}

// Función para agregar el ID de seguimiento a la tabla peticiones
function updateSeguimiento(req, res) {
  const seg_id = req.body.seg_id;
  const pet_id = req.params.pet_id;
  const sql = 'UPDATE peticiones SET seg_id = ? WHERE pet_id = ?';
  dbConnection.query(sql, [seg_id, pet_id], (err, resultado) => {
    if (err) {
      console.error('Error al agregar la id del seguimiento: ', err);
      res.status(500).send('Error interno del servidor');
      return;
    }
    res.json(resultado);
  });
}


module.exports = {
    getRequests,
    updateRequest,
    getRequestsLawyer,
    updateSeguimiento
};