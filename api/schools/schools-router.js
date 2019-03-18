const router = require('express').Router();

const Schools = require('./schools-model');

router.get('/schools', (req, res) => {
    Schools.find()
        .then(schools => {
            res.status(200).json(schools)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

module.exports = router;