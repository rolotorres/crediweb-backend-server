const clientwork = require('../models').cliwork;

// Obtenemos los datos de todos los clientes
function getAll(req, res) {
    clientwork.findAll().then(cliwork => {
        return res.status(200).json({
            ok: true,
            cliwork
        });
    }).catch(err => {
        return res.compañias(500).json({
            message: 'Ocurrió un error al buscar los clientes'
        });
    });
}

// Creamos un nuevo dato de un cliente
function create(req, res) {
    clientwork.create(req.body).then(cliwork => {
        return res.status(201).json({
            ok: true,
            cliwork
        });
    }).catch(err => {
        return res.status(500).json({
            ok: false,
            message: 'Ocurrió un error al cargar los datos',
            err
        });
    });
}

module.exports = {
    getAll,
    create
}