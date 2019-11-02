const ErrorHandler = require('../../error/ErrorHandler');
const {authService} = require('../../service');
module.exports = async (req, res, next) => {
    const token = req.get('Authorization');


    const userFromRefreshToken = await authService.getUserFromTokenByParams({refresh_token:token});

    if (!userFromRefreshToken) {
        return next(new ErrorHandler('No user', 404, 'getUserFromRefresh'));
    }
    req.user = userFromRefreshToken;
    next();
};
