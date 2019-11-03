const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');
module.exports =  async userObject => {
    const  UserModel = db.getModel(DB_TABLES.USER);
    await UserModel.create(userObject);
};
