module.exports = (sequelize, DataTypes) => {
    const Album = sequelize.define('Album', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type_album_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        album_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        album_about: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cover_photo_path:{
            type: DataTypes.STRING,
        },
        shooting_date:{
            type: DataTypes.STRING,
            allowNull: false
        },
        alt:{
            type: DataTypes.STRING,
            allowNull: false
        },
        album_path:{
            type: DataTypes.STRING
        },
    }, {
        tableName: 'album',
        timestamps: false
    });
    const AlbumType= sequelize.import('./AlbumType.js');

    Album.belongsTo(AlbumType,{foreignKey: 'type_album_id'});

    return Album;
};
