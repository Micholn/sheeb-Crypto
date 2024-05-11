const express = require('express');
const router = expres.Router();
const { check, validationResult } = require('express-validator');

const Faq = require('../../models/Faq');

@route POST api/faq 
@desc Create a faq 
//@access Private 
router.post(
   '/', 
   check('question', 'question is required').notEmpty(),
   check('answer', 'answer is required').notEmpty(),
   async (req, res) => {
     const errors = validationResult(req);
   }
)
