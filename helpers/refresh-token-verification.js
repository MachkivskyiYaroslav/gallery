const jwt = require('jsonwebtoken');
const ErrorHandler = require('../error/ErrorHandler');
const {JWT_SECRET,JWT_METHOD} = require('../constant');

module.exports = async (token,method) => {

    if(method===JWT_METHOD.ADMIN){
      await  jwt.verify(token,JWT_SECRET.ADMIN_REFRESH, (err) => {
            if(err){
                throw new ErrorHandler('Token is not valid',403,'refresh-token-verification');
            }
        });
    }
    if(method===JWT_METHOD.USER){
     await   jwt.verify(token,JWT_SECRET.USER_REFRESH, (err) => {
            if(err){
                throw new ErrorHandler('Token is not valid',403,'refresh-token-verification');
            }
            return;
        });
    }
};
