const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const User = require('../models/User')

router.post('/',[

    body('name','Input your name').isLength({min: 1}),
    body('email','Email is invalid!').isEmail(),
    body('password','Password must be atleast 7 characters long!').isLength({ min: 7 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then(user => res.json('user add success..!')).catch(error => {
        console.error(error.message);
        res.send('Email already exists!')
    });
})


module.exports = router