require('dotenv').config();
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET || 'top secret info';
const Students = require('../students/students-model');

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

//POST REQUEST FOR REGISTER
router.post('/register', (req, res) => {
    const student = req.body;

    const hash = bcrypt.hashSync(student.password, 8)
    student.password = hash;

    Students.add(student)
        .then(savedStudent => {
            res.status(200).json(savedStudent)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

// POST REQUEST FOR LOGIN
router.post('/login', (req, res) => {
    let { student_name, password } = req.body;

    Students.findStudentBy({ student_name })
        .first()
        .then(student => {
            if (student && bcrypt.compareSync(password, student.password)) {
                const token = generateToken(student)
                res.status(200).json({
                    message: 'Welcome ${student.student_name}',
                    token
                })
            } else {
                res.status(401).json({
                    message: 'Credentials do not match'
                })
            }
        })
        .catch(err => {
            res.status(401).json(err)
        })
})

module.exports = router;