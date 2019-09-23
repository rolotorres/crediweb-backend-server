module.exports = (sequelize, DataTypes) => {
    const requisito = sequelize.define('req', {
        reqid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descripcion: DataTypes.STRING,
        activo: DataTypes.BOOLEAN,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        schema: 'public',
        tableName: 'requisito'
    });

    return requisito;
}