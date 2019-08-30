module.exports = (sequelize, DataTypes) => {
    const faja = sequelize.define('faja', {
        fajaid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        schema: 'public',
        tableName: 'fajas'
    });

    return faja;
}