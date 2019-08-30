module.exports = (sequelize, DataTypes) => {
    const comtypes = sequelize.define('comtype', {
        comptypeid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        schema: 'public',
        tableName: 'companies_types'
    });

    return comtypes;
}