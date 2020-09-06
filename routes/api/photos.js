const { singlePublicFileUpload, singleMulterUpload } = require('../util/awsS3')
const express = require('express');
const asyncHandler = require('express-async-handler');
const { handleValidationErrors } = require("../util/validation");
const { Photo, User } = require("../../db/models");
const router = express.Router();




router.get('/', handleValidationErrors, asyncHandler(async (req, res, next) => {
  const photos = await Photo.findAll({ include: User })
  res.json({ photos })
}))

router.get('/:id', handleValidationErrors, asyncHandler(async (req, res, next) => {
  const photoId = req.params.id
  const photo = await Photo.findByPk(photoId, { include: User })

  res.json({ photo })
}))

router.delete('/:id', asyncHandler(async (req, res, nex) => {

  const photoId = req.params.id;
  const photoToDelete = await Photo.findByPk(photoId);
  await photoToDelete[0].destroy();
  res.json({ message: 'success' })

}))

router.post('/', singleMulterUpload('photo'), async (req, res) => {
  const userData = req.body;
  userData.photo = await singlePublicFileUpload(req.file);
  const photo = new Photo(photoData);
  await photo.save();
  res.json(photo);
})



module.exports = router;
