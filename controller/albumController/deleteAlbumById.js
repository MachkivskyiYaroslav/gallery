const {albumService,photoService} = require('../../service');
const fs = require('fs-extra');
const {resolve} = require('path');
module.exports = async (req,res,next) => {
    try {
       const {album_id} = req.body;

       const {album_path} = await  albumService.getAlbumById(album_id);
       await albumService.deleteAlbumById(album_id);
       await fs.removeSync(resolve(appRoot,'public',album_path));
       await photoService.deletePhotoByAlbumId(album_id);

       res.status(200).end();
    }catch (e) {
        res.json
        {
            res
                .status(e.status)
                .json({
                    message: e.message,
                    controller: e.controller
                })
        }
    }
};
