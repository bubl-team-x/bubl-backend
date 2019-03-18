const db = require('../../data/dbConfig');

module.exports = {
    find,
    findById,
    insert
}

function find(id) {
    let query = db('schools');

    if (id) {
        return query
            .where('id', id)
            .first()
    }

    return query
}

function findById(id) {
    return db('schools')
        .where({ id })
        .first()
}

async function insert(school) {
    return db('schools')
        .insert(school)
        .then(([id]) => this.find(id))
}