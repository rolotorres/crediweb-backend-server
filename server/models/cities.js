module.exports = (sequelize, DataTypes) => {
    const citi = sequelize.define('city', {
        cityid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dptoid: DataTypes.INTEGER,
        description: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        schema: 'public',
        tableName: 'cities'
    });

    citi.associate = function(models){
        citi.belongsTo(models.department, {
            foreignKey: 'dptoid',
            targetKey: 'dptoid',
            as: 'dptos'
        });
    }

    return citi;
}