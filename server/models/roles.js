module.exports = (sequelize, DataTypes) => {
    const rol = sequelize.define('role', {
        roleid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        roletype: DataTypes.STRING,
        description: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        schema: 'public',
        tableName: 'roles'
    });

    return rol;
}