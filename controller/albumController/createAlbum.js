const fs = require('fs-extra');
const {resolve} = require('path');
const uuid = require('uuid').v1();
const {albumService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const album = req.body; // take data from request
        const photo= req.files.photos;  // in postMan set key field "photo"
        const appRoot = global.appRoot;
        const {type} = await albumService.getTypeAlbumById(album.type_album_id); // get type shooting for create folder
        const {id, album_title} = await albumService.createAlbum(album); // create album
        const photoDirectory = `gallery/${type}/${id}/${album_title.replace(/\s+/g, '')}`;
        const photoExtension = photo.name.split('.').pop();
        const photoName = `${uuid}.${photoExtension}`;
        await fs.mkdirSync(resolve(appRoot, 'public', photoDirectory), {recursive: true});
        await photo.mv(resolve(appRoot, 'public', photoDirectory, photoName));
        await albumService.updateAlbumByParams(
            {
                album_path: `${photoDirectory}`,
                cover_photo_path: `${photoDirectory}/${photoName}`
            },
             {id});
        res.status(201).end();

    } catch (e) {
        res
            .status(e.status)
            .json({
                message: e.message,
                controller: e.controller
            })
    }

};
