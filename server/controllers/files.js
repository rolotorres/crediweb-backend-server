const files = require('../models').file;

// Obtenemos todos los documentos
function getAll(req, res) {
    files.findAll().then(file => {
        return res.status(200).json({
            ok: true,
            file
        });
    }).catch(err => {
        return res.status(500).json({
            message: 'Ocurrió un error al buscar los documentos'
        });
    });
}

// Creamos un nuevo documento
function create(req, res) {
    files.create(req.body).then(file => {
        return res.status(201).json({
            ok: true,
            file
        });
    }).catch(err => {
        return res.status(500).json({
            ok: false,
            message: 'Ocurrió un erro al cargar los datos',
            err
        });
    });
}

// Inactivamos un rol
function deleted(req, res) {
    var id = req.params.id;

    let cambiaEstado = {
        active: false
    };

    files.findByPk(id).then(file => {
        file.update(cambiaEstado).then(() => {
            return res.status(200).json({
                ok: true,
                file
            });
        }).catch(err => {
            return res.status(500).json({
                ok: false,
                message: 'Ocurrió un erro al intertar borrar el documento',
                err
            });
        });
    }).catch(err => {
        return res.status(400).json({
            ok: false,
            message: 'No existe el documento con el id ' + id,
            err
        });
    });
}

module.exports = {
    getAll,
    create,
    deleted
}