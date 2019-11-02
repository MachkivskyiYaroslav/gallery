const ErrorHandler = require('../../error/ErrorHandler');
const {tokenVerification} = require('../../helpers');
const {JWT_METHOD} = require('../../constant');
module.exports = async (req, res, next) => {
    const token = req.get('Authorization');
    if (!token) {
        // res.status(403).send('No authorized like admin').end();
        return next(new ErrorHandler('No token', 403, 'CheckAccessToken'));

    }
      await tokenVerification(token, JWT_METHOD.ADMIN);


    next();
};
