const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

module.exports = async (id) => {
    const AlbumPhotoModel= db.getModel(DB_TABLES.ALBUM_PHOTO);

    await AlbumPhotoModel.destroy({
        where: {
            album_id: id
        }
    });

};
