const express = require('express');
const router = express.Router();
const dbConnection = require('./database/db');
const lawyerController = require('./controllers/lawyerController');
const requestsController = require('./controllers/requestsController');
const clientController = require('./controllers/clientController');
const seguimientoController = require('./controllers/seguimientoController');
const estatusController = require('./controllers/estatusController');
const login = require('./controllers/login');
const app = express();

// Middleware para analizar JSON
app.use(express.json());

//login admin
router.post('/login', login.auth);

//login abogado
router.post('/loginAbo', login.authAbo);

// Ruta para obtener todos los abogados
router.get('/lawyers', lawyerController.getLawyers);

// Ruta para agregar un abogado
router.post('/lawyers', lawyerController.addLawyer);

// Ruta para traer datos del abogado por correo y contraseña
router.post('/lawyersUser', lawyerController.postLawyerByUser)

// Ruta para actualizar un abogado
router.put('/lawyers/:id', lawyerController.updateLawyer);

// Ruta para cambiar el estado de un abogado
router.patch('/lawyers/:id', lawyerController.changeStatus);

// Ruta para obtener un abogado por su ID
router.get('/lawyers/:id', lawyerController.getLawyerById);

// Ruta para obtener una peticion por el documento del abogado
router.get('/lawyersRequests/:abo_documento', requestsController.getRequestsLawyer);

// Ruta para obtener todas las peticiones
router.get('/requests', requestsController.getRequests);

// Ruta para actualizar una petición
router.put('/requests/:id', requestsController.updateRequest);

// Ruta para actualizar el seguimiento de una petición
router.put('/requests_seg/:pet_id', requestsController.agregarIdSeguimiento);

// Ruta para obtener todos los clientes
router.get('/clients', clientController.getClients);

// Ruta para agregar un cliente
router.post('/clients', clientController.addClient);

// Ruta para actualizar un cliente
router.put('/clients/:id', clientController.updateClient);

// Ruta para cambiar el estado de un cliente
router.patch('/clients/:id', clientController.changeStatus);

// Ruta para obtener un cliente por su ID
router.get('/clients/:id', clientController.getClientById);

// Ruta para añadir seguimiento
router.post('/seguimiento', seguimientoController.insertarNovedad);

// Ruta para recibir id de novedad
router.get('/seguimiento', seguimientoController.getSeguimiento);

// Ruta para cambiar estado de una petición
router.post('/estatus', estatusController.cambioEstado);

module.exports = router;
