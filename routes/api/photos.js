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





module.exports = router;
