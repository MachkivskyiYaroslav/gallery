module.exports = (sequelize, DataTypes) => {
    const PhotoResponsiveStatus = sequelize.define('PhotoResponsiveStatus', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        label: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'photo_responsive_status',
        timestamps: false
    });
    return PhotoResponsiveStatus;
}
