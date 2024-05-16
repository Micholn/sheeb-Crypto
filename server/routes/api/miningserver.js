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
            
        } catch {
            
        }
    }
)