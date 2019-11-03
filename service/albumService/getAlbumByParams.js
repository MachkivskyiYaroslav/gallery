const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');
module.exports = async (type,album_id,title) => {

    const AlbumModel = db.getModel(DB_TABLES.ALBUM);
    const typeModel = db.getModel(DB_TABLES.ALBUM_TYPE);
    console.log(type,album_id,title)
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
        }],

    }, {
        attributes: ['id', 'type_album_id', 'album_title', 'album_about', 'cover_photo_path', 'album_path', 'shooting_date']
    });
    console.log(album);

    return album && album.dataValues;
};
