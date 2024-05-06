const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
    //get token from header
    const token = req.header('x-header-token');

    //Check if not token 
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied'});
    }

    // Verify token 
    try {
        jwt.verify
    }

}