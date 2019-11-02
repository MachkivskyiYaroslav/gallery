const {albumService} = require('../../service');
const ErrorHandler = require('../../error/ErrorHandler');

module.exports = async (req, res, next) => {

    const {album_id} = req.body;
    console.log(album_id);
    const album = await albumService.getAlbumById(album_id);

    if (!album) {
        return next(new ErrorHandler('Album not found', 404, 'checkIsAlbumPresent'));
        res.status(404).send('Album not found');
    }

    next();
};
