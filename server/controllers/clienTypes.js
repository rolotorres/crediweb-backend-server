const clitype = require('../models').clientype;

// Obtenemos todos los tipos de clientes
function getAll(req, res) {
    clitype.findAll().then(clitypes => {
        return res.status(200).json({
            ok: true,
            clitypes
        });
    }).catch(err => {
        return res.status(500).json({
            message: 'Ocurrió un error al buscar los departamentos'
        });
    });
}

// Creamos un nuevo tipo de cliente
function create(req, res) {
    clitype.create(req.body).then(clitype => {
        return res.status(201).json({
            ok: true,
            clitype
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

    clitype.findByPk(id).then(clitype => {
        clitype.update(cambiaEstado).then(() => {
            return res.status(200).json({
                ok: true,
                clitype
            });
        }).catch(err => {
            return res.status(500).json({
                ok: false,
                message: 'Ocurrió un erro al intertar borrar el departamento',
                err
            });
        });
    }).catch(err => {
        return res.status(400).json({
            ok: false,
            message: 'No existe el departamento con el id ' + id,
            err
        });
    });
}

module.exports = {
    getAll,
    create,
    deleted
}