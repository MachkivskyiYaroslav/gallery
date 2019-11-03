const router = require('express').Router();
const {authController,adminController,albumController} = require('../../controller');
const {authMiddleware,userMiddleware,filesMiddleware,albumMiddleware} = require('../../middlewares');

//With un-use tokens
router.post('/auth/',authController.authAdmin);



router.use(authMiddleware.checkAdminTokenMiddleware);  //check tokens
// With use tokens
router.post('/createAlbum',
    albumMiddleware.checkIfTheAlbumTypeIsPresetMiddleware,
    filesMiddleware.CheckUserFilesCountMiddleware,
    filesMiddleware.checkPhotoMiddleware,
    albumController.createAlbum );

router.use('/users/:user_id/',userMiddleware.checkIsUserPresetmiddleware);
router.post('/users/:user_id/block', adminController.blockUser);
router.post('/users/:user_id/unblock', adminController.unblockUser);


module.exports=router;
