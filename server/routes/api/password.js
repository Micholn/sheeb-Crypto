const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Password = require('../../models/Password');

router.post(
    '/', 
    check('value', 'Empty value is not allowed').notEmpty(),
    async (req, res) => {
      const errors = validationResult(req);  
      if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array})
      }
      try {

      } catch (err) {
        console.err(err.message);
        res.status(500).send('Server Error');
      }
    }
 );

 router.get('/', async (req, res) => {
    try {

    } catch {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
 });

 