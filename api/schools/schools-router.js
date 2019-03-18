const router = require('express').Router();

const Schools = require('./schools-model');

// GET REQUEST
// GET ALL SCHOOLS
router.get('/schools', (req, res) => {
    Schools.find()
        .then(schools => {
            res.status(200).json(schools)
        })
        .catch(error => {
            res.status(500).json({
                error: 'There was a problem retrieving the schools.'
            })
        })
});

// GET SCHOOL REQUEST
router.get('/schools/:id', async (req, res) => {
    try {
        const school = await Schools.find(req.params.id)

        if (school) {
            res.status(200).json(school)
        } else {
            res.status(404).json({
                message: 'The School was not found.'
            })
        }

    } catch {
        res.status(500).json({
            error: 'There was a problem retrieving the school.'
        })
    }
})

// POST REQUEST
// POST SCHOOL REQUEST
router.post('/schools', async (req, res) => {
    try {
        const postSchool = await Schools.insert(req.body);
        res.status(201).json(postSchool)
    } catch {
        res.status(500).json({
            error: 'Create School failed'
        })
    }
})

module.exports = router;