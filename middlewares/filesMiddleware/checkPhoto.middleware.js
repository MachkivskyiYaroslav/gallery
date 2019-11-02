const {FILES_CHECK} = require('../../constant');
const ErrorHandler = require('../../error/ErrorHandler');
const check= require('./checkIfThePhotoStatusIsResponsive.middleware');
module.exports =  (req, res, next) => {

    req.photos = [];
    // req.alt =[]
    if (!req.files) {
        next()
    }


    const files = Object.values(req.files);

    for (let i = 0; i < files.length; i++) {
        const {mimetype, size, name} = files[i];

        if (FILES_CHECK.PHOTO_MIMETYPES.includes(mimetype)) {

            if (FILES_CHECK.MAX_PHOTO_SIZE < size) {
                return next(new ErrorHandler(
                    `Max file size is ${FILES_CHECK.MAX_PHOTO_SIZE / (1024 * 1024)}mb`,
                    400,
                    'photoFileChecker')
                )
            }
            if(files.length>1){
                files[i].alt=  req.body.alt[i];
                files[i].photo_responsive_status = req.body.photo_responsive_status[i];
                req.photos.push(files[i]);
            }
            files[i].alt = req.body.alt;
            files[i].photo_responsive_status = req.body.photo_responsive_status;
            req.photos.push(files[i]);





        }  else {
            next(new ErrorHandler(`File ${name} is not valid`, 400, 'photoFileChecker'))
        }
    }
    next()
};
