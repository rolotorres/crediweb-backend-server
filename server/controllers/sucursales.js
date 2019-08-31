const sucursal = require('../models').suc;

// Obtenemos todas las sucursales
function getAll(req, res) {
    sucursal.findAll().then(suc => {
        return res.status(200).json({
            ok: true,
            suc
        });
    }).catch(err => {
        return res.status(500).json({
            message: 'Ocurrió un error al buscar las sucursales'
        });
    });
}

// Creamos una nueva sucursal
function create(req, res) {
    sucursal.create(req.body).then(suc => {
        return res.status(201).json({
            ok: true,
            suc
        });
    }).catch(err => {
        return res.status(500).json({
            ok: false,
            message: 'Ocurrió un erro al cargar los datos',
            err
        });
    });
}

// Actualizamos una sucursal
function update(req, res) {
    var id = req.params.id;
    var body = req.body;

    sucursal.findByPk(id).then(suc => {
        suc.update(body).then(() => {
            return res.status(200).json({
                ok: true,
                suc
            });
        }).catch(err => {
            return res.status(500).json({
                ok: false,
                message: 'Ocurrió un error al intentar actualizar los datos',
                err
            });
        });
    }).catch(err => {
        return res.status(400).json({
            ok: false,
            message: 'No existe la sucursal con el id ' + id,
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

    sucursal.findByPk(id).then(suc => {
        suc.update(cambiaEstado).then(() => {
            return res.status(200).json({
                ok: true,
                suc
            });
        }).catch(err => {
            return res.status(500).json({
                ok: false,
                message: 'Ocurrió un erro al intertar borrar la sucursal',
                err
            });
        });
    }).catch(err => {
        return res.status(400).json({
            ok: false,
            message: 'No existe la sucursal con el id ' + id,
            err
        });
    });
}

module.exports = {
    getAll,
    create,
    update,
    deleted
}