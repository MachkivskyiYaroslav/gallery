const {albumService} = require('../../service');
module.exports = async (req,res,next) => {
        try {
            const {type,id,title}= req.params;

            const album = await albumService.getAlbumByParams(type,id,title);
            res.json(album);
        }catch (e) {
            res.status(400).json({
                success: false,
                msg: e.message
            })
        }
};
