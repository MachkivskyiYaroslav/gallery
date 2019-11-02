const ErrorHandler =require('../../error/ErrorHandler');

module.exports = (req, res, next) => {
    const photos = req.files.photos;

    if (photos.length > 1) {
        return next(new ErrorHandler(`You can upload just one photo`, 400, 'checkUserFilesCount'))

    }

    next()
};
