require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET || 'top secret info';

module.exports = {
    authenticate
}

function authenticate(req, res, next) {
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
