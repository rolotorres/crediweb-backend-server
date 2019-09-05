const crediType = require('../models').creditype;

// Obtenemos todos los tipos de creditos
function getAll(req, res) {
    crediType.findAll().then(creditype => {
        return res.status(200).json({
            ok: true,
            creditype
        });
    }).catch(err => {
        return res.status(500).json({
            message: 'Ocurrió un error al buscar los tipos de creditos'
        });
    });
}

// Creamos un nuevo tipo de credito
function create(req, res) {
    crediType.create(req.body).then(creditype => {
        return res.status(201).json({
            ok: true,
            creditype
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