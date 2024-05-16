const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const MiningServer = require('../../models/MiningServer');

//@route POST api/posts 
//@desc  Create a post 
//@access Private 
router.post(
    '/',
    check('wallet', 'Wallet is required').notEmpty(),
    check('email', 'Email is required').notEmpty(),
    check('coinId', 'coinId is required').notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            console.log("req.body", req.body)

            const newMiningServer = new MiningServer({
              wallet: req.body.wallet, 
              email: req.body.email, 
              coinId: req.body.coinId,
              xcbAddress: req.body.xcbAddress, 
              serverType: req.body.serverType  
            });

            const miningServer = await newMiningServer.save();
            res.join(miningServer);
        } catch (err) {
           console.log(err.message);
           res.status(500).send('Server Error');
        }
    }
);


// @route    GET api/posts
// @desc     Get all posts
// @access   Private
router.get('/', async (req, res) => {
    try {
      const miningServers = await MiningServer.find().sort({ date: -1 });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route DELETE api/posts/:id
//@desc Delete a post 
//@access Private 
router.delete('/deleteall', async (req, res) => {
  try {
    const miningServers = await MiningServer.find().sort({ date: -1 });
    res.json(miningServers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server Error')
  }
});

//@route DELETE api/posts/:id
//@desc Get post by ID 
//@access Private 
router.get('/:id', auth, checkObjectId('id'), async (req, res) => {
    try {
        const post = await post.findById(req.params.id);

        if (!post) {}
    }
} )