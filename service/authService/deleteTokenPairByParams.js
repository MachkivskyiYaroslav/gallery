const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');
module.exports =  (deleteObject) => {

    const tokenModel = db.getModel(DB_TABLES.OAUTH_TOKEN);

    tokenModel.destroy(  {
        where: {deleteObject}
    });

};
