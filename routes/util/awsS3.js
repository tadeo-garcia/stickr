// const AWS = require("aws-sdk");
// const NAME_OF_BUCKET = "stickr-app";
// const multer = require("multer");
// // const multerS3 = require("multer-s3");
// // const secret_key = process.env.AWS_SECRET_ACCESS_KEY;
// // const access_key = process.env.AWS_ACCESS_KEY_ID;
// // else {
// //  make sure to set environment variables in production for:
// //  AWS_ACCESS_KEY_ID
// //  AWS_SECRET_ACCESS_KEY
// //  and aws will automatically use those environment variables
// // }
// const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

// const singlePublicFileUpload = async (file) => {
//   const { name, mimetype, buffer } = await file;
//   const path = require("path");
//   // name of the file in your S3 bucket will be the date in ms plus the extension name
//   const Key = new Date().getTime().toString() + path.extname(name);
//   const uploadParams = {
//     Bucket: NAME_OF_BUCKET,
//     Key,
//     Body: buffer,
//     ACL: "public-read",
//   };
//   const result = await s3.upload(uploadParams).promise();

//   // save the name of the file in your bucket as the key in your database to retrieve for later
//   return result.Location;
// };

// const storage = multer.memoryStorage({
//   destination: function (req, file, callback) {
//     callback(null, "");
//   },
// });

// //bottom two are middlewares for submitting:

// const singleMulterUpload = (nameOfKey) => multer({ storage: storage }).single(nameOfKey);

// // AWS.config.update({
// //   accessKeyId: access_key,
// //   secretAccessKey: secret_key,
// //   region: "us-west-1",
// // });

// // const upload = multer({
// //   storage: multerS3({
// //     s3: s3,
// //     bucket: NAME_OF_BUCKET,
// //     acl: "public-read",
// //     contentType: multerS3.AUTO_CONTENT_TYPE,
// //     key: function (req, file, cb) {
// //       cb(null, file.originalname);
// //     },
// //   }),
// // });

// // module.exports = {
// //   singlePublicFileUpload,
// //   singleMulterUpload,
// //   s3,
// // };

// exports.singlePublicFileUpload = singlePublicFileUpload;
// exports.singleMulterUpload = singleMulterUpload;
