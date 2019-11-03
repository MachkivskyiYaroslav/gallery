const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');
module.exports = async (type,album_id,title) => {

    const AlbumModel = db.getModel(DB_TABLES.ALBUM);
    const typeModel = db.getModel(DB_TABLES.ALBUM_TYPE);
    const album = await AlbumModel.findOne({
        include:[{
            model: typeModel,
            where: {
                type: type
            },
            attributes: ['type']
        }],
        where:{
            id: album_id,
            album_title: title
        },

    }, {
        attributes: ['id', 'type_album_id', 'album_title', 'album_about', 'cover_photo_path', 'album_path', 'shooting_date']
    });


    return album && album.dataValues;
};
