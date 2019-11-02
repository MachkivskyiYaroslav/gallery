const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');
module.exports = async (id) => {
    const AlbumTypeModel = db.getModel(DB_TABLES.ALBUM_TYPE);

    const albumType = await AlbumTypeModel.findByPk(id, {
        attributes: ['id', 'type']
    });

    return albumType && albumType.dataValues;
};
