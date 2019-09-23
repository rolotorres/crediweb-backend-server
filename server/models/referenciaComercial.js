module.exports = (sequelize, DataTypes) => {
    const refCom = sequelize.define('refcom', {
        refcomid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: DataTypes.STRING,
        contacto: DataTypes.STRING,
        activo: DataTypes.BOOLEAN,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        schema: 'public',
        tableName: 'referencia_comercial'
    });

    return refCom;
}