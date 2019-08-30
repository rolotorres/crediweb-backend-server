module.exports = (sequelize, DataTypes) => {
    const dpto = sequelize.define('department', {
        dptoid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dptoname: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        schema: 'public',
        tableName: 'deparments'
    });

    return dpto;
}