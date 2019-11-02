module.exports = (sequelize, DataTypes) => {
    const AlbumType = sequelize.define('AlbumType', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'album_type',
        timestamps: false
    });
    return AlbumType;
};
