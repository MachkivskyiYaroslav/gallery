module.exports = (sequelize, DataTypes) => {
    const AlbumPhoto = sequelize.define('Album', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        album_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        path: {
            type: DataTypes.STRING,
            allowNull: false
        },
        alt:{
            type: DataTypes.STRING,
            allowNull: false
        },
        photo_responsive_status:{
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    }, {
        tableName: 'album_photo',
        timestamps: false
    });
    const Album= sequelize.import('./Album.js');
    const PhotoResponsiveStatus= sequelize.import('./PhotoResponsiveStatus.js');

    AlbumPhoto.belongsTo(Album,{foreignKey: 'album_id'});
    AlbumPhoto.belongsTo(PhotoResponsiveStatus,{foreignKey: 'photo_responsive_status'});

    return AlbumPhoto;
};
