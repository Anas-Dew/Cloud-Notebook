const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const User = require('../models/User')

router.post('/', [

  body('name', 'Input your name').isLength({ min: 1 }),
  body('email', 'Email is invalid!').isEmail(),
  body('password', 'Password must be atleast 7 characters long!').isLength({ min: 7 })
], async (req, res) => {
  let user = await User.findOne({ email: req.body.email })
  if (user) {
    return res.status(400).json({ error: "Email already exists!" })
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }).then(user => res.json('user add success..!')).catch(error => {
    console.error(error.message);
    res.send('Email already exists!')
  });
})


module.exports = router