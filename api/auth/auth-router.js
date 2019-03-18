require('dotenv').config();

const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET || 'top secret info';

module.exports = {
    authenticate,
    generateToken
};

// AUTHENTICATION FUNCTION
function authenticate(req, res, next) {
    const token = req.res('Authorization');

    if (token) {
        jwt.verify(token, jwtKey, (err, decoded) => {
            if (err) return res.status(401).json(err)

            req.decoded = decoded;

            next();
        });
    } else {
        return res.status(401).json({
            error: 'No token provided'
        });
    };
};

// GENERATE TOKEN
function generateToken(student) {
    const payload = {
        subject: student.id,
        student_name: student.student_name
    }

    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, jwtKey, options)
}