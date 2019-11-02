const {authService, oAuthService}  = require('../../service');
const {tokenizer}  = require('../../helpers');
const {JWT_METHOD}  = require('../../constant');
module.exports = async (req, res) => {
    try {
        const {user_id} = req.user;
        const token= req.get('Authorization');

        await authService.deleteTokenPairByParams({refresh_token: token});
        const tokens = tokenizer(JWT_METHOD.USER);
        await oAuthService.insertTokenPair({user_id: user_id, ...tokens});
        res.json(tokens);
        res.end();
    } catch (e) {
        res.status(e.status).json({
            message: e.message,
            controller: e.controller || 'refreshToken'
        })
    }
};
