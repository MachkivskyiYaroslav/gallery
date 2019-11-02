const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');
module.exports = async (album_id,title,type) => {
    const AlbumModel = db.getModel(DB_TABLES.ALBUM);
    const typeModel = db.getModel(DB_TABLES.ALBUM_TYPE);
    const album = await AlbumModel.findOne({
        where:{
            id: album_id,
            album_title: title
        },
        include:[{
            model: typeModel,
            where: {
                type: type
            },
            attributes: ['type']
        }]
    }, {
        attributes: ['id', 'type_album_id', 'album_title', 'album_about', 'cover_photo_path', 'album_path', 'shooting_date']
    });

    return album && album.dataValues;
};
