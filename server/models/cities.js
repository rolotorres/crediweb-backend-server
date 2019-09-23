module.exports = (sequelize, DataTypes) => {
    const citi = sequelize.define('city', {
        ciudadid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dptoid: DataTypes.INTEGER,
        descripcion: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        schema: 'public',
        tableName: 'ciudad'
    });

    citi.associate = function(models) {
        citi.belongsTo(models.departamento, {
            foreignKey: 'dptoid',
            targetKey: 'dptoid',
            as: 'dptos'
        });
    }

    return citi;
}