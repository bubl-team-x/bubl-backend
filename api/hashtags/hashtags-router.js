const router = require('express').Router();

const Hashtags = require('./hashtags-model');

// GET REQUEST
// GET ALL SCHOOLS
router.get('/hashtags', (req, res) => {
    Hashtags.find()
        .then(hashtags => {
            let value = 1;
            let displayHashtags = [];
            const newHashtags = hashtags.map(hashtag => {
                return hashtag.label
            });

            for (let i = 0; i < newHashtags.length; i++) {
                console.log(newHashtags[i])
                if (newHashtags[i] === newHashtags[i + 1]) {
                    value = value + 1;
                } else {
                    displayHashtags.push({ label: newHashtags[i], value: value })
                    value = 1;
                }
            };

            res.status(200).json(displayHashtags)
        })
        .catch(error => {
            res.status(500).json({
                error: 'There was a problem retrieving the hashtags.'
            })
        })
});

// GET SCHOOL REQUEST
router.get('/hashtags/:id', async (req, res) => {
    try {
        const hashtag = await Hashtags.find(req.params.id)

        if (hashtag) {
            res.status(200).json(hashtag)
        } else {
            res.status(404).json({
                message: 'The Hashtag was not found.'
            })
        }

    } catch {
        res.status(500).json({
            error: 'There was a problem retrieving the hashtag.'
        })
    }
})

// POST REQUEST
// POST SCHOOL REQUEST
router.post('/hashtags', async (req, res) => {
    try {
        const postHashtag = await Hashtags.insert(req.body);
        res.status(201).json(postHashtag)
    } catch {
        res.status(500).json({
            error: 'Create hashtag failed'
        })
    }
});

// UPDATE REQUEST
// UPDATE SCHOOL REQUEST
router.put('/hashtags/:id', async (req, res) => {
    try {
        const id = await req.params.id;
        const body = await req.body;
        const updateHashtag = await Hashtags.update(id, body);

        if (updateHashtag) {
            res.status(202).json(updateHashtag)
        } else {
            res.status(404).json({
                message: 'The hashtag could not be found to update.'
            })
        }
    } catch {
        res.status(500).json({
            error: 'There was a problem updating the hashtag.'
        })
    }
})

// DELETE REQUEST
// DELETE SCHOOL REQUEST
router.delete('/hashtags/:id', async (req, res) => {
    try {
        const id = await req.params.id;
        const deleteHashtag = await Hashtags.remove(id);

        if (deleteHashtag) {
            res.status(200).json({
                message: 'The hashtag was deleted successfully.'
            })
        } else {
            res.status(404).json({
                message: 'The hashtag could not be found to be deleted.'
            })
        }
    } catch {
        res.status(500).json({
            error: 'There was a problem deleting the hashtag.'
        })
    }
})

module.exports = router;