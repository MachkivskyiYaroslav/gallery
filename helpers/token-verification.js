const jwt = require('jsonwebtoken');
const ErrorHandler = require('../error/ErrorHandler');
const {JWT_SECRET,JWT_METHOD} = require('../constant');

module.exports = (token,method) => {

    if(method===JWT_METHOD.ADMIN){
        jwt.verify(token,JWT_SECRET.ADMIN_ACCESS, (err,decoded) => {
            if(err){
                throw new ErrorHandler('Token is not valid',403,'token-verification');
            }

        });
    }
    if(method===JWT_METHOD.USER){
        jwt.verify(token,JWT_SECRET.USER_ACCESS, (err) => {
            if(err){
                throw new ErrorHandler('Token is not valid',403,'token-verification');
            }
            return err ;
        });
    }
};
