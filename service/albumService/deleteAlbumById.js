const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

module.exports = async (deleteAlbumId) => {

    const albumModel = db.getModel(DB_TABLES.ALBUM);

    albumModel.destroy({
        where: {
            id: deleteAlbumId
        }
    });
};
