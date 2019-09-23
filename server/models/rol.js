module.exports = (sequelize, DataTypes) => {
    const rol = sequelize.define('role', {
        rolid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tiporol: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        activo: DataTypes.BOOLEAN,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        schema: 'public',
        tableName: 'rol'
    });

    return rol;
}