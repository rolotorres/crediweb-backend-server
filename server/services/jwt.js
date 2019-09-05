const nJwt = require('njwt');
const config = require('../config/config');

const secret = config.secret_token;

exports.createToken = (user) => {
    var params = {
        sub: user.userid,
        usuario: user.usermail,
        usuario: user.roleid
    }

    var jwt = nJwt.create(params, secret);

    var t = new Date();
    t.setHours(t.getHours() + 2);
    jwt.setExpiration(t);

    var token = jwt.compact();

    return token;
}