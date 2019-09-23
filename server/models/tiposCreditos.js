module.exports = (sequelize, DataTypes) => {
    const tipcred = sequelize.define('tipcred', {
        tipocredito: {
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
        tableName: 'tipo_credito'
    });

    return tipcred;
}