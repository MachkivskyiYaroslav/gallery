const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

module.exports = (paramsObject, findObject) => {
    const AlbumModel = db.getModel(DB_TABLES.ALBUM);

    AlbumModel.update(paramsObject, {
        where: findObject
    })
};
