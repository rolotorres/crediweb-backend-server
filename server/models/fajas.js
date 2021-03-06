module.exports = (sequelize, DataTypes) => {
    const faja = sequelize.define('fajas', {
        fajaid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descripcion: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        schema: 'public',
        tableName: 'faja'
    });

    return faja;
}