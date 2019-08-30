const comptype = require('../models').comtype;

// Obtenemos todos los tipos de empresas
function getAll(req, res) {
    comptype.findAll().then(comtype => {
        return res.status(200).json({
            ok: true,
            comtype
        });
    }).catch(err => {
        return res.status(500).json({
            message: 'Ocurrió un error al buscar los tipos de empresas'
        });
    });
}

// Creamos un nuevo tipo de empresa
function create(req, res) {
    comptype.create(req.body).then(comtype => {
        return res.status(201).json({
            ok: true,
            comtype
        });
    }).catch(err => {
        return res.status(500).json({
            ok: false,
            message: 'Ocurrió un erro al cargar los datos',
            err
        });
    });
}

// Inactivamos un tipo de empresa
function deleted(req, res) {
    var id = req.params.id;

    let cambiaEstado = {
        active: false
    };

    comptype.findByPk(id).then(comtype => {
        comtype.update(cambiaEstado).then(() => {
            return res.status(200).json({
                ok: true,
                comtype
            });
        }).catch(err => {
            return res.status(500).json({
                ok: false,
                message: 'Ocurrió un erro al intertar borrar el tipo de empresa',
                err
            });
        });
    }).catch(err => {
        return res.status(400).json({
            ok: false,
            message: 'No existe el tipo de empresa con el id ' + id,
            err
        });
    });
}

module.exports = {
    getAll,
    create,
    deleted
}