const {userService, oAuthService}= require('../../service');
const ErrorHandle= require('../../error/ErrorHandler');
const {tokenizer, passHashChecker}= require('../../helpers');
const {USER_ROLES,USER_STATUS,JWT_METHOD}= require('../../constant');

module.exports = async (req,res) => {
    try {
        const{email,password}=req.body;

        const isUserPresent= await userService.getUserByParams({email,role_id:USER_ROLES.USER});

        if(!isUserPresent){
            throw new ErrorHandle('User is not present',404, 'authUser');
        }
        if(isUserPresent.status_id !== USER_STATUS.ACTIVE){
            throw new ErrorHandle('Account is blocked:(',403, 'authUser');
        }
        const tokens = tokenizer(JWT_METHOD.USER);
        await passHashChecker(isUserPresent.password,password);
        await oAuthService.insertTokenPair({user_id: isUserPresent.id, ...tokens});
        res.json(tokens);
    }catch (e) {
        res.status(e.status).json({
            message: e.message,
            controller: e.controller || 'authUser'
        })
    }
};
