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
router.post('/register', async (req, res) => {
    let student = req.body;

    const hash = bcrypt.hashSync(student.password, 8)
    student.password = hash;
    // try {
    //     const newStudent = await Students.add(student)
    //     return res.status(201).json(newStudent)
    // } catch (error) {
    //     console.log(error)
    //     return res.status(500).json(error)
    // }
    Students.add(student)
        .then(savedStudent => {
            console.log(savedStudent);
            return res.status(201).json({ savedStudent, token })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

// POST REQUEST FOR LOGIN
router.post('/login', (req, res) => {
    let { student_name, password } = req.body;

    Students.findStudentBy({ student_name })
        .first()
        .then(student => {
            console.log(student)
            if (student && bcrypt.compareSync(password, student.password)) {
                const token = generateToken(student)
                res.status(200).json({
                    message: `Welcome ${student.student_name}`,
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