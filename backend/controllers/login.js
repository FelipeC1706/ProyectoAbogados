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

exports.authAbo = async (req, res) => {
    const abo_correo = req.body.user;
    const abo_password = req.body.pass;

    try {
        const query = `SELECT * FROM abogados WHERE abo_correo = ? and abo_password = ?`;
        const values = [abo_correo, abo_password];

        config.query(query, values, (err, resultados) => {
            if (abo_correo && abo_password) {
                if (resultados.length === 0 || abo_password !== resultados[0].abo_password) {
                    res.status(400).send({
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "Credenciales incorrectas",
                        ruta: 'login'
                    });
                } else {
                    // Crear la sesión aquí
                    req.session.loggedin = true;
                    req.session.name = resultados[0].name;

                    res.status(200).send({
                        alert: true,
                        alertTitle: "Conexión exitosa",
                        alertMessage: "Success",
                        alertIcon: 'success',
                        ruta: ''
                    });
					return;
                }
                res.end();
            } else {
                res.send('Por favor, ingresa usuario y contraseña.');
                res.end();
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error de servidor');
    }
};


exports.validarSesion = (req, res) => {
    // Verifica si existe la sesión y si está autenticado
    if (req.session.loggedin === true) {
        // Si la sesión está activa, permite que continúe con la solicitud
        res.status(200).json({
            authenticated: true,
            message: "Usuario autenticado"
        });
    } else {
        // Si no hay sesión activa, devuelve un error de no autorizado
        res.status(401).json({
            error: true,
            message: "No autorizado"
        });
    }
};

exports.destroySession = (req, res) => {
    // Destruir la sesión
    req.session.destroy(err => {
        if (err) {
            console.error("Error al destruir la sesión:", err);
            res.status(500).json({ error: true, message: "Error al cerrar sesión" });
            return;
        }
        // La sesión se destruyó correctamente
        res.status(200).json({ success: true, message: "Sesión cerrada correctamente" });
    });
};