module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('user', {
        userid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        roleid: DataTypes.INTEGER,
        clientid: DataTypes.INTEGER,
        sucursalid: DataTypes.INTEGER,
        username: DataTypes.STRING,
        userlastname: DataTypes.STRING,
        usermail: DataTypes.STRING,
        alias: DataTypes.STRING,
        pasword: DataTypes.STRING,
        avatar: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        schema: 'public',
        tableName: 'users'
    });

    users.associate = function(models) {
        users.belongsTo(models.role, {
            foreignKey: 'roleid',
            targetKey: 'roleid',
            as: 'roles'
        });
    }

    users.associate = function(models) {
        users.belongsTo(models.clidata, {
            foreignKey: 'clientid',
            targetKey: 'clientid',
            as: 'clientData'
        });
    }

    users.associate = function(models) {
        users.belongsTo(models.suc, {
            foreignKey: 'sucursalid',
            targetKey: 'sucursalid',
            as: 'sucursal'
        });
    }

    return users;
}