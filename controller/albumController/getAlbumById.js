const {albumService} = require('../../service');
module.exports = async (req,res,next) => {
        try {
            const {id,title,type}= req.params;
            const album = await albumService.getAlbumByParams(id,title,type);
            res.json(album);
        }catch (e) {
            res.status(400).json({
                success: false,
                msg: e.message
            })
        }
};
