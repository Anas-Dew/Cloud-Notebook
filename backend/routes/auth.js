const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

router.post('/create-user', [
  // get these values from request body
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

  const salt = await bcrypt.genSalt(10);
  const hashPass =  await bcrypt.hash(req.body.password, salt)

  user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: hashPass,
  }).then(user => res.json('user add success..!')).catch(error => {
    console.error(error.message);
    res.send('Email already exists!')
  });

  const data = {
    user : {
      id : user.id
    }
  }

  const authToken = jwt.sign(data, 'lewpewmew');
})


router.post('/login-user', [
  // get these values from request body
  body('email', 'Email is invalid!').isEmail(),
  body('password', 'Password cannot be blank!').exists()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email, password} = req.body;
  try {
    let user = await User.findOne({email});
    if(!user){
      return res.status(400).json({error: "Email or password is incorrect!"})
    }
    let passwordCompare = await bcrypt.compare(password, user.password)

    if(!passwordCompare){
      return res.status(400).json({error: "Email or password is incorrect!"})
      
    }
    const data = {
      user : {
        id : User.id
      }
    }
  
    const authToken = jwt.sign(data, 'lewpewmew');
    return res.status(200).json({authToken})
  } catch (error) {
    return res.status(500).json({error: "Internal Server Error"})
  }
})
module.exports = router