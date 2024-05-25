const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Password = require('../../models/Password');

router.post(
    '/', 
    check('value', 'Empty value is not allowed').notEmpty(),
    async (req, res) => {
      const errors = validationResult(req);  
    }
 )