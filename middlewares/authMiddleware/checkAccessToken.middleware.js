const ErrorHandler = require('../../error/ErrorHandler');
const {JWT_METHOD} = require('../../constant')
const {tokenVerification} = require('../../helpers');
module.exports = async (req, res, next) => {
    const token = req.get('Authorization');
    if (!token) {
        return next(new ErrorHandler('No token', 403, 'CheckAccessToken'));
    }

    tokenVerification(token,JWT_METHOD.USER);

    next();
};
