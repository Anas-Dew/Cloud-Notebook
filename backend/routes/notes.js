const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes')
const { body, validationResult } = require('express-validator');

// ROUTE : 1 -> GET ALL NOTES OF LOGGED IN USER (GET). LOGGED IN REQUIRED
router.get('/fetch-all-notes', fetchuser, async (req, res) => {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes)
    // res.send('Hii from notes')
})

// ROUTE : 2 -> ADD A NOTE FROM LOGGED IN USER (POST). LOGGED IN REQUIRED
router.post('/add-note', fetchuser, [
    body('title', 'Title must be added').isLength({ min: 1 }),
    // body('descript', 'Email is invalid!').isEmail(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const {title, description, tags} = req.body
        const note = new Notes({
            title, description, tags, user: req.user.id
        })

        const savedNote = await note.save()

        res.json(savedNote)
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" })
    }

})
module.exports = router