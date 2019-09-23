module.exports = (sequelize, DataTypes) => {
    const clientdata = sequelize.define('clidata', {
        datoclienteid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ciudadid: DataTypes.INTEGER,
        fajaid: DataTypes.INTEGER,
        tipoclienteid: DataTypes.INTEGER,
        direccionparticular: DataTypes.STRING,
        documento: DataTypes.INTEGER,
        edad: DataTypes.INTEGER,
        contacto: DataTypes.STRING,
        lat: DataTypes.STRING,
        lng: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        schema: 'public',
        tableName: 'dato_cliente'
    });

    clientdata.associate = function(models) {
        clientdata.belongsTo(models.city, {
            foreignKey: 'cityid',
            targetKey: 'cityid',
            as: 'ciudad'
        });
    };

    clientdata.associate = function(models) {
        clientdata.belongsTo(models.fajas, {
            foreignKey: 'fajaid',
            targetKey: 'fajaid',
            as: 'faja'
        });
    };

    clientdata.associate = function(models) {
        clientdata.belongsTo(models.tipcli, {
            foreignKey: 'tipoclienteid',
            targetKey: 'tipoclienteid',
            as: 'tipo_cliente'
        });
    };

    return clientdata;
}