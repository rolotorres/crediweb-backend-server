module.exports = (sequelize, DataTypes) => {
    const creditype = sequelize.define('creditype', {
        creditypeid: {
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
        tableName: 'credit_type'
    });

    return creditype;
}