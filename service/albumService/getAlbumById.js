const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');
module.exports = async (album_id) => {
    const AlbumModel = db.getModel(DB_TABLES.ALBUM);
    const album = await AlbumModel.findByPk(album_id, {
        attributes: ['id', 'type_album_id', 'album_title', 'album_about', 'cover_photo_path', 'album_path', 'shooting_date']
    });

    return album && album.dataValues;
};
