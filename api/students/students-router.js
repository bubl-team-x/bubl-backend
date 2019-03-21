const router = require('express').Router();

const Students = require('./students-model');
const { authenticate } = require('../auth/authenticate');

// GET REQUEST
// GET ALL STUDENTS
router.get('/students', (req, res) => {
    Students.find()
        .then(students => {
            res.status(200).json(students)
        })
        .catch(error => {
            res.status(500).json({
                error: 'There was a problem retrieving the student.'
            })
        })
});

// GET STUDENT REQUEST
router.get('/students/:id', async (req, res) => {
    try {
        const student = await Students.findStudentById(req.params.id)

        if (student) {
            res.status(200).json(student)
        } else {
            res.status(404).json({
                message: 'The Student was not found.'
            })
        }

    } catch {
        res.status(500).json({
            error: 'There was a problem retrieving the student.'
        })
    }
})

// POST REQUEST
// POST STUDENT REQUEST
router.post('/students', async (req, res) => {
    try {
        console.log(req.body)
        const postStudent = await Students.add(req.body);
        res.status(201).json(postStudent)
    } catch {
        res.status(500).json({
            error: 'Create Student failed'
        })
    }
});

// UPDATE REQUEST
// UPDATE STUDENT REQUEST
router.put('/students/:id', async (req, res) => {
    try {
        const id = await req.params.id;
        const body = await req.body;
        const updateStudent = await Students.update(id, body);

        if (updateStudent) {
            res.status(202).json(updateStudent)
        } else {
            res.status(404).json({
                message: 'The student could not be found to update.'
            })
        }
    } catch {
        res.status(500).json({
            error: 'There was a problem updating the student.'
        })
    }
})

// DELETE REQUEST
// DELETE STUDENT REQUEST
router.delete('/students/:id', async (req, res) => {
    try {
        const id = await req.params.id;
        const deleteStudent = await Students.remove(id);

        if (deleteStudent) {
            res.status(200).json({
                message: 'The student was deleted successfully.'
            })
        } else {
            res.status(404).json({
                message: 'The student could not be found to be deleted.'
            })
        }
    } catch {
        res.status(500).json({
            error: 'There was a problem deleting the student.'
        })
    }
})

module.exports = router;