const express = require('express');
const asyncHandler = require('express-async-handler');
const { handleValidationErrors } = require("../util/validation");
const { Photo } = require("../../db/models");
const router = express.Router();



router.get('/', handleValidationErrors, asyncHandler(async (req, res, next) => {
  const photos = await Photo.findAll()
  res.json({ photos })
}))




module.exports = router;
