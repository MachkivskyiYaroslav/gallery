const {userService, oAuthService}= require('../../service');
const ErrorHandle= require('../../error/ErrorHandler');
const {tokenizer, passHashChecker}= require('../../helpers');
const {USER_ROLES,USER_STATUS,JWT_METHOD}= require('../../constant');

module.exports = async (req,res) => {
    try {
        const{email,password}=req.body;

        const isUserPresent= await userService.getUserByParams({email,role_id:USER_ROLES.ADMIN});

        if(!isUserPresent){
            throw new ErrorHandle('User is not present',404, 'authAdmin');
        }
        if(isUserPresent.status_id !== USER_STATUS.ACTIVE){
            throw new ErrorHandle('Account is blocked:(',403, 'authAdmin');
        }
        const tokens = tokenizer(JWT_METHOD.ADMIN);

        await passHashChecker(isUserPresent.password,password);
        await oAuthService.insertTokenPair({
            user_id: isUserPresent.id,
            ...tokens});
        res.json(tokens);
    }catch (e) {
        res.status(e.status).json({
            message: e.message,
            controller: e.controller || 'authAdmin'
        })
    }
};
