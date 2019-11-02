const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

module.exports = async photoObject => {
    const ALBUM_PHOTO = db.getModel(DB_TABLES.ALBUM_PHOTO);
    const photo = await ALBUM_PHOTO.create(photoObject);
    return photo && photo.dataValues;
};
