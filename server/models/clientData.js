module.exports = (sequelize, DataTypes) => {
    const clientdata = sequelize.define('clidata', {
        clientid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cityid: DataTypes.INTEGER,
        fajaid: DataTypes.INTEGER,
        clienttypeid: DataTypes.INTEGER,
        compdataid: DataTypes.INTEGER,
        homeaddress: DataTypes.STRING,
        dni: DataTypes.INTEGER,
        ruc: DataTypes.STRING,
        lat: DataTypes.STRING,
        lng: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        schema: 'public',
        tableName: 'client_data'
    });

    clientdata.associate = function(models) {
        clientdata.belongsTo(models.faja, {
            foreignKey: 'fajaid',
            targetKey: 'fajaid',
            as: 'faja'
        });
    };

    clientdata.associate = function(models) {
        clientdata.belongsTo(models.clientype, {
            foreignKey: 'clienttypeid',
            targetKey: 'clienttypeid',
            as: 'clientype'
        });
    };

    clientdata.associate = function(models) {
        clientdata.belongsTo(models.city, {
            foreignKey: 'cityid',
            targetKey: 'cityid',
            as: 'city'
        });
    };

    clientdata.associate = function(models) {
        clientdata.belongsTo(models.compdata, {
            foreignKey: 'compdataid',
            targetKey: 'compdataid',
            as: 'compData'
        });
    };

    return clientdata;
}