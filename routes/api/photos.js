const express = require("express");
const asyncHandler = require("express-async-handler");
const { handleValidationErrors } = require("../util/validation");
const { Photo, User } = require("../../db/models");
const router = express.Router();

const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const secret_key = process.env.AWS_SECRET_ACCESS_KEY;
const access_key = process.env.AWS_ACCESS_KEY_ID;

AWS.config.update({
  accessKeyId: access_key,
  secretAccessKey: secret_key,
  region: "us-west-1",
});

const s3 = new AWS.S3();

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const multerS3Config = multerS3({
  s3: s3,
  bucket: "stickr-app",
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (req, file, cb) {
    cb(null, new Date().toISOString() + "-" + file.name);
  },
});

const upload = multer({
  storage: multerS3Config,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5, // only 5 MB files max
  },
});

const singlePublicFileUpload = async (file, userId) => {
  const { originalname, mimetype, buffer } = await file;
  const path = require("path");
  // name of the file in your S3 bucket will be the date in ms plus the extension name
  const Key = 'users/' + userId + '/' + new Date().getTime().toString() + path.extname(originalname);
  const uploadParams = {
    Bucket: "stickr-app",
    Key,
    Body: buffer,
    ACL: "public-read",
  };
  const result = await s3.upload(uploadParams).promise();

  // save the name of the file in your bucket as the key in your database to retrieve for later
  return result.Location;
};

const storage = multer.memoryStorage({
  destination: function (req, file, callback) {
    callback(null, "");
  },
});

const singleMulterUpload = (nameOfKey) => multer({ storage: storage }).single(nameOfKey);

router.post("/", singleMulterUpload("file"), asyncHandler(async (req, res) => {
    const photoData = req.body;
    const description = req.body.description;
    const userId = req.body.id;

    photoData.url = await singlePublicFileUpload(req.file, userId);
    const url = photoData.url
    const photo = await Photo.create({description, url, userId})
    return res.json ({ photo })

  })
);

router.get(
  "/",
  handleValidationErrors,
  asyncHandler(async (req, res, next) => {
    const photos = await Photo.findAll({ include: User });
    res.json({ photos });
  })
);

router.get(
  "/:id",
  handleValidationErrors,
  asyncHandler(async (req, res, next) => {
    const photoId = req.params.id;
    const photo = await Photo.findByPk(photoId, { include: User });

    res.json({ photo });
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const photoId = req.params.id;
    const photoToDelete = await Photo.findByPk(photoId);
    if (!photoToDelete) {
      const err = new Error("Photo not found!");
      // err.status = 404;
      next(err);
      return;
    }

    await photoToDelete.destroy();
    res.json({ message: "success" });
  })
);

module.exports = router;
