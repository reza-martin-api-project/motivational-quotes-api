const router = require('express').Router();
const { findOneAndUpdate } = require('./models/test.model.js');
const Test = require('./models/test.model.js');

// Basic requests
router.route('/') // localhost
.get( async (req, res) => {
    const findData = await Test.findOne({ author: 'Master Oogway' });
    res.status(200).json(findData);
})
.post( async (req, res) => {
    const { quote, author } = req.body;
    const newQuote = new Test(
        {
            quote,
            author
        }
    );
    newQuote.save()
    .then(() => res.status(200).json(newQuote))
    .catch(err => res.status(400).json('Error ' + err));
})
.put( async (req, res) => {
    const { author } = req.body;
    const putReq = await Test.findOneAndReplace(
        { author: author },
        { 
            quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            author: "Nelson Mandela"
        },
        (err, result) => {
            err ? res.send(err) : res.send(result);
        }
    );
    res.status(200).json(putReq);
})

module.exports = router;