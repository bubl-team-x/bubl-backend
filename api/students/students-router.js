const router = require('express').Router();

const Schools = require('./students-model');

// GET REQUEST
// GET ALL SCHOOLS
router.get('/students', (req, res) => {
    Schools.find()
        .then(schools => {
            res.status(200).json(schools)
        })
        .catch(error => {
            res.status(500).json({
                error: 'There was a problem retrieving the student.'
            })
        })
});

// GET SCHOOL REQUEST
router.get('/students/:id', async (req, res) => {
    try {
        const school = await Schools.find(req.params.id)

        if (school) {
            res.status(200).json(school)
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
// POST SCHOOL REQUEST
router.post('/students', async (req, res) => {
    try {
        const postSchool = await Schools.insert(req.body);
        res.status(201).json(postSchool)
    } catch {
        res.status(500).json({
            error: 'Create Student failed'
        })
    }
});

// UPDATE REQUEST
// UPDATE SCHOOL REQUEST
router.put('/students/:id', async (req, res) => {
    try {
        const id = await req.params.id;
        const body = await req.body;
        const updateSchool = await Schools.update(id, body);

        if (updateSchool) {
            res.status(202).json(updateSchool)
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
// DELETE SCHOOL REQUEST
router.delete('/students/:id', async (req, res) => {
    try {
        const id = await req.params.id;
        const deleteSchool = await Schools.remove(id);

        if (deleteSchool) {
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