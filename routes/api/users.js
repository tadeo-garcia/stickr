const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require("express-validator");

const { User, Photo } = require("../../db/models");
const { handleValidationErrors } = require("../util/validation");
const { generateToken } = require("../util/auth");
const {
  jwtConfig: { expiresIn },
} = require("../../config");


const validateSignup = [
  check("username", "must be between 5 and 70 characters")
    .isLength({ min: 1, max: 70 }),
  check("password", "must be 6 or more characters")
    .exists()
    .isLength({ min: 6, max: 70 }),
  check('passwordConfirm', 'must have the same value as the password field')
    .custom((value, { req }) => value === req.body.password)
];

const router = express.Router();

router.get('/', asyncHandler(async function (_req, res, _next) {
  const users = await User.findAll({})
  res.json({ users });
}));

// router.get('/:id', asyncHandler(async function (_req, res, _next) {
//   const userId = req.params.id;
//   const users = await User.findByPk(userId)
//   res.json({ user });
// }));

router.get('/:id/photos', asyncHandler(async function (req, res, _next) {

  console.log('~~~inside /:id/photos~~~')
  const userId = req.params.id;
  console.log(`~~~~~~${userId}~~~INSIDE :ID/PHOTOS~~~`)
  const photos = await Photo.findAll({
    where: {
      userId
    }
  })
  res.json({ photos });
}));

router.post(
  "/",
  validateSignup,
  handleValidationErrors,
  asyncHandler(async function (req, res) {
    const user = await User.signup(req.body);

    const token = await generateToken(user);
    res.cookie("token", token, {
      maxAge: expiresIn * 1000, // maxAge in milliseconds
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    return res.json({
      user,
    });
  })
);

module.exports = router;
