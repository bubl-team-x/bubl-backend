require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, jwtKey, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: 'You are not authorized' })
            } else {
                req.decodedJwt = decodedToken;
                next();
            }
        });
    } else {
        res.status(401).json({
            message: 'No access'
        });
    };
};
