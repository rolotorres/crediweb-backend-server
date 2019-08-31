module.exports = (sequelize, DataTypes) => {
    const sucursal = sequelize.define('suc', {
        sucursalid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        compdataid: DataTypes.INTEGER,
        cityid: DataTypes.INTEGER,
        address: DataTypes.STRING,
        phone: DataTypes.STRING,
        lat: DataTypes.STRING,
        lng: DataTypes.STRING,
        matriz: DataTypes.BOOLEAN,
        active: DataTypes.BOOLEAN,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        schema: 'public',
        tableName: 'sucursales'
    });

    sucursal.associate = function(models) {
        sucursal.belongsTo(models.compdata, {
            foreignKey: 'compdataid',
            targetKey: 'compdataid',
            as: 'compData'
        });
    }

    sucursal.associate = function(models) {
        sucursal.belongsTo(models.city, {
            foreignKey: 'cityid',
            targetKey: 'cityid',
            as: 'city'
        });
    }

    return sucursal;
}