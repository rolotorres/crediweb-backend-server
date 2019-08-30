const fajas = require('../models').faja;

// Obtener todas las fajas
function getAll(req, res) {
    fajas.findAll().then(fajas => {
        return res.status(200).json({
            ok: true,
            fajas
        });
    }).catch(err => {
        return res.status(500).json({
            message: 'Ocurrió un error al buscar las fajas'
        });
    });
}

// Creamos una nueva faja
function create(req, res) {
    fajas.create(req.body).then(faja => {
        return res.status(201).json({
            ok: true,
            faja
        });
    }).catch(err => {
        return res.status(500).json({
            ok: false,
            message: 'Ocurrió un erro al cargar los datos',
            err
        });
    });
}

// Inactivamos una faja
// function deleted(req, res) {
//     var id = req.params.id;

//     let cambiaEstado = {
//         active: false
//     };

//     fajas.findByPk(id).then(faja => {
//         faja.update(cambiaEstado).then(() => {
//             return res.status(200).json({
//                 ok: true,
//                 faja
//             });
//         }).catch(err => {
//             return res.status(500).json({
//                 ok: false,
//                 message: 'Ocurrió un erro al intertar borrar la faja',
//                 err
//             });
//         });
//     }).catch(err => {
//         return res.status(400).json({
//             ok: false,
//             message: 'No existe la faja con el id ' + id,
//             err
//         });
//     });
// }

module.exports = {
    getAll,
    create,
    // deleted
}