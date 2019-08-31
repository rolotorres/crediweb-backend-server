const citi = require('../models').city

// Obtenemos todas las ciudades
function getAll(req, res) {
    citi.findAll().then(ciudad => {
        return res.status(200).json({
            ok: true,
            ciudad
        });
    }).catch(err => {
        return res.status(500).json({
            message: 'Ocurrió un error al buscar las ciudades'
        });
    });
}

// Creamos una nueva ciudad
function create(req, res) {
    citi.create(req.body).then(ciudad => {
        return res.status(201).json({
            ok: true,
            ciudad
        });
    }).catch(err => {
        return res.status(500).json({
            ok: false,
            message: 'Ocurrió un problema al cargar los datos',
            err
        });
    });
}


module.exports = {
    getAll,
    create,
    // deleted
}