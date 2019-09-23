const rol = require('./roles');
const faja = require('./fajas');
const file = require('./files');
const user = require('./users');
const citi = require('./cities');
const suc = require('./sucursales');
const dpto = require('./departamentos');
const clidata = require('./clientData');
const cliwork = require('./clientWork');
const tipcli = require('./TiposClientes');
const tipcred = require('./tiposCreditos');
const compdata = require('./companiesData');
const comptype = require('./companiesTypes');

module.exports = {
    rol,
    suc,
    citi,
    dpto,
    faja,
    file,
    user,
    tipcli,
    clidata,
    tipcred,
    cliwork,
    compdata,
    comptype
}