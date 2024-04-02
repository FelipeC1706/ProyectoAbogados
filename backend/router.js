const express = require('express');
const router = express.Router();
const { validarSesion } = require('./controllers/login');
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

//Rutas publicas
//login admin
router.post('/login', login.auth);

//login abogado
router.post('/loginAbo', login.authAbo);

//destruir sesión
router.post('/logout', login.destroySession);

router.post('/validAuthenticated', login.validarSesion);

// Ruta para obtener todos los abogados
router.get('/lawyers', validarSesion,lawyerController.getLawyers);

// Ruta para agregar un abogado
router.post('/lawyers', validarSesion,lawyerController.addLawyer);

// Ruta para actualizar un abogado
router.put('/lawyers/:id', validarSesion,lawyerController.updateLawyer);

// Ruta para cambiar el estado de un abogado
router.patch('/lawyers/:id', validarSesion,lawyerController.changeStatus);

// Ruta para obtener un abogado por su ID
router.get('/lawyers/:id', validarSesion,lawyerController.getLawyerById);

// Ruta para obtener una peticion por el documento del abogado
router.get('/lawyersRequests/:abo_documento', validarSesion,requestsController.getRequestsLawyer);

// Ruta para obtener todas las peticiones
router.get('/requests', validarSesion,requestsController.getRequests);

// Ruta para actualizar una petición
router.put('/requests/:id', validarSesion,requestsController.updateRequest);

// Ruta para obtener todos los clientes
router.get('/clients',validarSesion, clientController.getClients);

// Ruta para agregar un cliente
router.post('/clients',validarSesion, clientController.addClient);

// Ruta para actualizar un cliente
router.put('/clients/:id',validarSesion, validarSesion,clientController.updateClient);

// Ruta para cambiar el estado de un cliente
router.patch('/clients/:id', validarSesion,clientController.changeStatus);

// Ruta para obtener un cliente por su ID
router.get('/clients/:id',validarSesion, clientController.getClientById);

// Ruta para actualizar el seguimiento de una petición
router.put('/requests_seg/:pet_id', validarSesion,requestsController.agregarIdSeguimiento);

// Ruta para añadir seguimiento
router.post('/seguimiento',validarSesion, seguimientoController.insertarNovedad);

// Ruta para recibir id de novedad
router.get('/seguimiento',validarSesion, seguimientoController.getSeguimiento);

// Ruta para cambiar estado de una petición
router.post('/estatus', validarSesion,estatusController.cambioEstado);

module.exports = router;
