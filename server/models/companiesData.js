module.exports = (sequelize, DataTypes) => {
    const comdata = sequelize.define('compdata', {
        compdataid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        comptypeid: DataTypes.INTEGER,
        ruc: DataTypes.STRING,
        compname: DataTypes.STRING,
        representative: DataTypes.STRING,
        compemail: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        schema: 'public',
        tableName: 'companies_data'
    });

    comdata.associate = function(models){
        comdata.belongsTo(models.comtype, {
            foreignKey: 'comptypeid',
            targetKey: 'comptypeid',
            as: 'compType'
        });
    }

    return comdata;
}