const {DB_TABLES}=require('../../constant')
const db = require('../../dataBase').getInstance();
module.exports = (tokenObject) => {
    const OAuthModel= db.getModel(DB_TABLES.OAUTH_TOKEN);
    console.log(tokenObject);
    OAuthModel.create(tokenObject);
};
