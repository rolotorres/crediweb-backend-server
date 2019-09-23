module.exports = (sequelize, DataTypes) => {
    const comdata = sequelize.define('compdata', {
        datoempresaid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreempresa: DataTypes.STRING,
        ruc: DataTypes.STRING,
        nombrerepresentante1: DataTypes.STRING,
        cirepresentante1: DataTypes.INTEGER,
        nombrerepresentante2: DataTypes.STRING,
        cirepresentante2: DataTypes.INTEGER,
        antiguedad: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        schema: 'public',
        tableName: 'dato_empresa'
    });

    return comdata;
}