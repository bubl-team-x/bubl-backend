const axios = require('axios');
const bcrypt = require('bcryptjs');

const Students = require('../students/students-model');
const { authenticate, generateToken } = require('../auth/authenticate');

module.exports = server => {
    server.post('/api/register', register);
    server.post('/api/login', login);
};

function register(req, res) {
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
}

function login(req, res) {
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
}