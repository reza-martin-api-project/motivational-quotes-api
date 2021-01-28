const router = require('express').Router();
const { findOneAndUpdate } = require('./models/test.model.js');
const Test = require('./models/test.model.js');

// Basic requests
router.route('/') // localhost
.get( async (req, res) => {
    try {
        const findData = await Test.findOne({ author: "Nelson Mandela" });
        res.status(200).json(findData);
    } catch (err) {
        console.log(err);
    };
})

module.exports = router;