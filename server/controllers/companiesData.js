const comdata = require('../models').compdata;

// Obtenemos los datos de todas las compañias
function getAll(req, res) {
    comdata.findAll().then(dato_empresa => {
        return res.status(200).json({
            ok: true,
            dato_empresa
        });
    }).catch(err => {
        return res.status(500).json({
            message: 'Ocurrió un error al buscar las compañias'
        });
    });
}

// Creamos un nuevo dato de una compañia
function create(req, res) {
    comdata.create(req.body).then(dato_empresa => {
        return res.status(201).json({
            ok: true,
            dato_empresa
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
    // deleted
}