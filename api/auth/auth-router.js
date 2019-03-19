require('dotenv').config();
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET || 'top secret info';

module.exports = {
    authenticate,
    generateToken
};

// AUTHENTICATION FUNCTION
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