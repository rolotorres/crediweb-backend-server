const dpto = require('../models').department;

// Obtenemos todos los departamentos
function getAll(req, res) {
    dpto.findAll().then(department => {
        return res.status(200).json({
            ok: true,
            department
        });
    }).catch(err => {
        return res.status(500).json({
            message: 'Ocurrió un error al buscar los departamentos'
        });
    });
}

// Creamos un nuevo departamento
function create(req, res) {
    dpto.create(req.body).then(department => {
        return res.status(201).json({
            ok: true,
            department
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

    dpto.findByPk(id).then(dpto => {
        dpto.update(cambiaEstado).then(() => {
            return res.status(200).json({
                ok: true,
                dpto
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