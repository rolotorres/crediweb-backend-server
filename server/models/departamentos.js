module.exports = (sequelize, DataTypes) => {
    const dpto = sequelize.define('departamento', {
        dptoid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombredpto: DataTypes.STRING,
        activo: DataTypes.BOOLEAN,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        schema: 'public',
        tableName: 'departamento'
    });

    return dpto;
}