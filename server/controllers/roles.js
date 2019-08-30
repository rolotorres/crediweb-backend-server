const rol = require('../models').role

// Obtenemos todos los roles
function getAll(req, res) {
    rol.findAll().then(role => {
        return res.status(200).json({
            ok: true,
            role
        });
    }).catch(err => {
        return res.status(500).json({
            message: 'Ocurrió un error al buscar los roles'
        });
    });
}

// Creamos un nuevo rol
function create(req, res) {
    rol.create(req.body).then(rol => {
        return res.status(201).json({
            ok: true,
            rol
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

    rol.findByPk(id).then(rol => {
        rol.update(cambiaEstado).then(() => {
            return res.status(200).json({
                ok: true,
                rol
            });
        }).catch(err => {
            return res.status(500).json({
                ok: false,
                message: 'Ocurrió un erro al intertar borrar el rol',
                err
            });
        });
    }).catch(err => {
        return res.status(400).json({
            ok: false,
            message: 'No existe el rol con el id ' + id,
            err
        });
    });
}

module.exports = {
    getAll,
    create,
    deleted
}