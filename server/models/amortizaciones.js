module.exports = (sequelize, DataTypes) => {
    const amortizacion = sequelize.define('amortizacion', {
        amortizacionid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        detalle: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        schema: 'public',
        tableName: 'amortizacion'
    });

    return amortizacion;
}