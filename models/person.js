module.exports = (sequelize, DataTypes) => {
    return sequelize.define('person', {
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        age: {
            type: DataTypes.INTERGER.UNSIGNED,
            allowNull: false,
        },
        
    },
    {
        timestamps: true,
    });
};