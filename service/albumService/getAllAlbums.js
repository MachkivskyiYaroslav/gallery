const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');
module.exports = async (req,res) => {
    const AlbumModel = db.getModel(DB_TABLES.ALBUM);
    const typeModel= db.getModel(DB_TABLES.ALBUM_TYPE)
    const album = await AlbumModel.findAll({
        attributes: ['id', 'type_album_id', 'album_title', 'album_about', 'cover_photo_path'],
        include:[{
            model:typeModel,
            attributes: ['type']
        }]
    });
    res.send(album);
    return album && album.dataValues;
};
