const {albumService} = require('../../service');
const ErrorHandler = require('../../error/ErrorHandler');

module.exports = async (req, res, next) => {

    const {type_album_id} = req.body;

    const albumType = await albumService.getTypeAlbumById(type_album_id);

    if (!albumType) {
        return next(new ErrorHandler('Album Type not found', 404, 'checkTypeAlbumIsPreset'));
    }

    next();
};
