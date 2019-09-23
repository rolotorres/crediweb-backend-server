module.exports = (sequelize, DataTypes) => {
    const clientwork = sequelize.define('cliwork', {
        cliworkid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        clientid: DataTypes.INTEGER,
        cityid: DataTypes.INTEGER,
        workplace: DataTypes.STRING,
        workaddress: DataTypes.STRING,
        workposition: DataTypes.STRING,
        seniority: DataTypes.STRING,
        salary: DataTypes.INTEGER,
        contact: DataTypes.STRING,
        phone: DataTypes.STRING,
        lat: DataTypes.STRING,
        lng: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        schema: 'public',
        tableName: 'client_work'
    });

    // clientwork.associate = function(models) {
    //     clientwork.belongsTo(models.clidata, {
    //         foreignKey: 'clientid',
    //         targetKey: 'clientid',
    //         as: 'clientype'
    //     });
    // };

    // clientwork.associate = function(models) {
    //     clientwork.belongsTo(models.city, {
    //         foreignKey: 'cityid',
    //         targetKey: 'cityid',
    //         as: 'workCity'
    //     });
    // };

    return clientwork;
}