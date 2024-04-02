const express = require('express');
const session = require('express-session');
const routes = require('./router');
const env = require('dotenv').config({path: './.env'});
const cors = require('cors');


const requireAuth = (req, res, next) => {
  if (req.session && req.session.loggedin) {
      // Si el usuario está autenticado, permite que continúe con la solicitud
      next();
  } else {
      // Si el usuario no está autenticado, redirige a la página de inicio de sesión
      res.redirect('/login'); // Cambia '/login' por la ruta de tu página de inicio de sesión
  }
};

const app = express();

// Middleware para parsear el cuerpo de la solicitud en formato JSON
app.use(express.json());


app.use(session({
  secret: 'miSecretoSuperSeguro123!@#',
  resave: false,
  saveUninitialized: false
}));
// Configurar las rutas
app.use(cors());
app.use('/', routes);

// Puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
});

module.exports = requireAuth;