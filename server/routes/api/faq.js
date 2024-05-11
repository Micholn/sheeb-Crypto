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
     if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
     }
     try {
        const newFaq = new Faq({
           question: req.body.question,
           answer: req.body.answer,
        });

        const faq = await newFaq.save();
        res.json(faq);
     } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
     }
   }
);

@route GET api/faq 
@desc Get all faqs 
@access Private 
router.get('/', async (req, res) => {
    try {

    } catch () {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
