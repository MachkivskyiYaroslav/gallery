const {photoService} =require('../../service');
const ErrorHandler = require('../../error/ErrorHandler');

module.exports= async (req,res,next) => {

    const files = Object.values(req.files);

    for (let i=0;i<files.length;i++) {
        const status = await  photoService.CheckIfThePhotoStatusIsResponsive(req.body.photo_responsive_status[i]);
        if(!status){
            return next(new ErrorHandler('Photo Status Not Found', 404, 'checkIf The Photo Status is Responsive'));

        }
    }


    next();
};
