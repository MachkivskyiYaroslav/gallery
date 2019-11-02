const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

module.exports = async (id) => {
    const PhotoResponsiveModel = db.getModel(DB_TABLES.PHOTO_RESPONSIVE_STATUS);
   const status=  await PhotoResponsiveModel.findByPk(id, {
        attributes: ['id', 'label']
    });

    return status && status.dataValues;
};
