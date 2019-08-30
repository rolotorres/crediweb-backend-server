module.exports = (sequelize, DataTypes) => {
    const clienttype = sequelize.define('clientype', {
        clienttypeid: {
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
        tableName: 'client_types'
    });

    return clienttype;
}