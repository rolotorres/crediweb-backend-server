module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('user', {
        usuarioid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rolid: DataTypes.INTEGER,
        datoclienteid: DataTypes.INTEGER,
        nombre: DataTypes.STRING,
        apellido: DataTypes.STRING,
        username: DataTypes.STRING,
        pasword: DataTypes.STRING,
        usermail: DataTypes.STRING,
        avatar: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        schema: 'public',
        tableName: 'usuario'
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
            foreignKey: 'datoclienteid',
            targetKey: 'datoclienteid',
            as: 'dato_cliente'
        });
    }

    return users;
}