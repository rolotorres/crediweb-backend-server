module.exports = (sequelize, DataTypes) => {
    const tipocliente = sequelize.define('tipcli', {
        tipoclienteid: {
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
        tableName: 'tipo_cliente'
    });

    return tipocliente;
}