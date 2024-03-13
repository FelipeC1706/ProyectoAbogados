const config = require('../database/db');
const sql = require('mssql');
const bcrypt = require('bcryptjs');


 // INICIO DE SESIÓN admin
 exports.auth = async (req, res) => {
    const adm_correo = req.body.user;
    const adm_password = req.body.pass;

    try {
		//console.log("yooooo111");
        const query = `SELECT * FROM administrador WHERE adm_correo = ?`;
		const values = [adm_correo];
		//console.log("aquiiii");
        config.query(query, values, (err, resultados) => {
			if (adm_correo && adm_password) {
				if (resultados.length === 0 ) {
					res.status(400).send({
						alert: true,
						alertTitle: "Error",
						alertMessage: "USUARIO y/o CONTRASEÑA incorrectos",
						ruta: 'login'
					  });
				} else {
					req.session.loggedin = true;
					req.session.name = resultados[0].name;
					res.status(200).send({
						alert: true,
						alertTitle: "Conexión exitosa",
						alertMessage: "Success",
						alertIcon: 'success',
						ruta: ''
					});
				}
				res.end();
			} else {
				res.send('Please enter user and Password!');
				res.end();
			}
		});
    } catch (err) {
        console.error(err);
        res.status(500).send('Error de servidor');
    }
};

//INICIO SESION ABOGADO
exports.authAbo = async (req, res) => {
    const abo_correo = req.body.user;
    const abo_password = req.body.pass;

    try {
		console.log("yooooo111");
        const query = `SELECT * FROM abogados WHERE abo_correo = ? and abo_password = ?`;
		const values = [abo_correo, abo_password];
		console.log("aquiiii");
        config.query(query, values, (err, resultados) => {
			//usuarioEncontrado = resultados[0];
			if (abo_correo && abo_password) {
				if (resultados.length === 0 || abo_password != resultados[0].abo_password) {
					res.status(400).send({
						alert: true,
						alertTitle: "Error",
						alertMessage: "credenciales incorrectas",
						ruta: 'login'
					  });
				} else {
					req.session.loggedin = true;
					req.session.name = resultados[0].name;
					res.status(200).send({
						alert: true,
						alertTitle: "Conexión exitosa",
						alertMessage: "Success",
						alertIcon: 'success',
						ruta: ''
					});
				}
				res.end();
			} else {
				res.send('Please enter user and Password!');
				res.end();
			}
		});
    } catch (err) {
        console.error(err);
        res.status(500).send('Error de servidor');
    }
};

exports.validarSesion =  (req, res)=> {
    //TODO: validar si el usuario está logueado
    //Debemos de crear una cookie desde el frontend que será igual al token de inicio de sesión de express
	if (req.session.loggedin) {
        res.send('loggeado');
		// res.send('index',{
		// 	login: true,
		// 	name: req.session.name			
		// });		
	} else {
        res.send('no loggeado');
		// res.send('index',{
		// 	login:false,
		// 	name:'Debe iniciar sesión',			
		// });				
	}
	res.end();
};