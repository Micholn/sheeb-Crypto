const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Faq = require('../../models/Faq');

//@route Post api/faq
//@desc Create a faq
//@access Private 
router.post(
  '/',
  check('question', 'question is required').notEmpty();
  check('answer', 'answer is required').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
     
)




module.exports = {
  
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
