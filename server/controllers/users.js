const users = require('../models').user;

// Obtenemos todos los usuarios
function getAll(req, res) {
    users.findAll().then(usuario => {
        return res.status(200).json({
            ok: true,
            usuario
        });
    }).catch(err => {
        return res.status(500).json({
            message: 'Ocurrió un error al buscar los usuarios'
        });
    });
}

// Creamos un nuevo usuario
function create(req, res) {
    users.create(req.body).then(usuario => {
        return res.status(201).json({
            ok: true,
            usuario
        });
    }).catch(err => {
        return res.status(500).json({
            ok: false,
            message: 'Ocurrió un problema al crear el usuario',
            err
        });
    });
}

// Actualizamos un usuario
function update(req, res) {
    var id = req.params.id;
    var body = req.body;

    users.findByPk(id).then(usuario => {
        usuario.update(body).then(() => {
            return res.status(200).json({
                ok: true,
                usuario
            });
        }).catch(err => {
            return res.status(500).json({
                ok: false,
                message: 'Ocurrió un error al intentar actualizar el usuario',
                err
            });
        });
    }).catch(err => {
        return res.status(400).json({
            ok: false,
            message: 'El usuario con el id ' + id + ' no existe',
            err
        });
    });
}

// Desactivamos un usuario
function deleted(req, res) {
    var id = req.params.id;

    let cambiaEstado = {
        active: false
    };

    users.findByPk(id).then(usuario => {
        usuario.update(cambiaEstado).then(() => {
            return res.status(200).json({
                ok: true,
                usuario
            });
        }).catch(err => {
            return res.status(500).json({
                ok: false,
                message: 'Ocurrió un error al intentar borrar el usuario',
                err
            });
        });
    }).catch(err => {
        return res.status(400).json({
            ok: false,
            message: 'El usuario con el id ' + id + ' no existe',
            err
        });
    });
}

module.exports = {
    getAll,
    create,
    update,
    deleted,
    // getOne,
    // login,
    // avatar,
    // getAvatar
}