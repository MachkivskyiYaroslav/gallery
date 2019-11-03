const fs = require('fs-extra');
const {resolve} = require('path');
const uuid = require('uuid');
const {albumService, photoService} = require('../../service');

module.exports = async (req, res) => {
    const {album_id} = req.body;
    let photos = [];
    const files = Object.values(req.files);
    const {id, album_title,type} = await albumService.getAlbumById(album_id);
    const photoDirectory = `gallery/${type}/${id}/${album_title.replace(/\s+/g, '')}`;
    await fs.mkdirSync(resolve(appRoot, 'public', photoDirectory), {recursive: true});
    for (let i = 0; i < files.length; i++) {
        photos.push(files[i]);
        let photosName = uuid() + '.' + photos[i].name.split('.').pop();
        photos[i].path = `${photoDirectory}/${photosName}`;
        photos[i].name = photosName;
        await photos[i].mv(resolve(appRoot, 'public', photoDirectory, photos[i].name));
        await photoService.addPhoto(
            {
                path: photos[i].path,
                alt: photos[i].alt,
                album_id: id,
                photo_responsive_status: photos[i].photo_responsive_status
            });
        res.status(201).end();
    }

    // const {id,album_title} = await albumService.getAlbumById(album_id);
    // const photoDirectory = `albums/${id}_${album_title.replace(/\s+/g, '')}`;
    // console.log(photos.length);
    // for(let i=0; i<photos.length;i++){
    //     console.log(i);
    //     let photosName = uuid() + '.' + photos[i].name.split('.').pop();
    //     photos[i].path =  `${photoDirectory}/${photosName}`;
    //     photos[i].name = photosName;
    //     await photos[i].mv(resolve(appRoot, 'public', photoDirectory, photos[i].name));
    //
    // }
};
