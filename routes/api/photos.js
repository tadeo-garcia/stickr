const { singlePublicFileUpload, singleMulterUpload } = require('../util/awsS3')
const express = require('express');
const fileUpload = require('express-fileupload');
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

router.delete('/:id', asyncHandler(async (req, res, next) => {

  const photoId = req.params.id;
  const photoToDelete = await Photo.findByPk(photoId);
  if (!photoToDelete) {
    const err = new Error("Photo not found!");
    err.status = 404;
    next(err);
    return;
  }

  await photoToDelete.destroy();
  res.json({ message: 'success' })

}))


router.post('/upload', asyncHandler(async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ message: 'No File Uploaded, please try again' })
  }


  const file = req.files.file;
  const url = `/pics/users/${file.name}`

  file.mv(`/Users/jesusgarcia/Desktop/stickr-app-project/client/public/pics/users/${file.name}`, err => {
    if (err) {
      console.log(err)
      res.status(500).send(err)
    }
  })

  const newPhoto = await Photo.create({
    description: req.body.description,
    url: url,
    userId: req.body.userId
  })

  res.json({ message: 'Success!' })
}))


// ~~~~~~~~~~~~~~~~~~~~~
// router.post('/upload', asyncHandler(async (req, res, next) => {
//   if (req.files === null) {
//     return res.status(400).json({ message: 'No File Uploaded, please try again' })
//   }
//   const file = req.files.file;

//   file.mv(`/Users/jesusgarcia/Desktop/stickr-app-project/client/public/pics/users/${file.name}`, err => {
//     if (err) {
//       console.log(err)
//       res.status(500).send(err)
//     }
//   })
//   const newPhoto = await Photo.create(req.body)
//   res.json({ newPhoto })
// }))
// ~~~~~~~~~~~~~~~~~~~~


module.exports = router;
