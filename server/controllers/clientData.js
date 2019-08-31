const clientdata = require('../models').clidata;

// Obtenemos los datos de todos los clientes
function getAll(req, res) {
    clientdata.findAll().then(clidata => {
        return res.status(200).json({
            ok: true,
            clidata
        });
    }).catch(err => {
        return res.status(500).json({
            message: 'Ocurrió un error al buscar los datos de los clientes',
            err
        });
    });
}

// Creamos un nuevo tipo de cliente
function create(req, res) {
    clientdata.create(req.body).then(clidata => {
        return res.status(201).json({
            ok: true,
            clidata
        });
    }).catch(err => {
        return res.status(500).json({
            ok: false,
            message: 'Ocurrió un erro al cargar los datos',
            err
        });
    });
}

module.exports = {
    getAll,
    create,
    // update,
    // deleted
}