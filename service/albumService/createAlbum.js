const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

module.exports = async (albumObject) =>{

          const AlbumModel = db.getModel(DB_TABLES.ALBUM);
          const album = await   AlbumModel.create(albumObject);

          return album && album.dataValues;


};
