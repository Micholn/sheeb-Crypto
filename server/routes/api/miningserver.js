const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const MiningServer = require('../../models/MiningServer');

router.post(
    '/',
    check('wallet', 'Wallet is required').notEmpty(),
    check('email', 'Email is required').notEmpty(),
    check('coinId', 'coinId is required').notEmpty(),
)