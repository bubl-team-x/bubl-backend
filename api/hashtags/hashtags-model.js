const db = require('../../data/dbConfig');

module.exports = {
    find,
    findById,
    insert,
    update,
    remove
}

function find(id) {
    let query = db('hashtags');

    if (id) {
        return query
            .where('id', id)
            .first()
    }

    return query
}

function findById(id) {
    return db('hashtags')
        .where({ id })
        .first()
}

async function insert(school) {
    return db('hashtags')
        .insert(school)
        .then(([id]) => this.find(id))
}

function update(id, changes) {
    return db('hashtags')
        .where('id', id)
        .update(changes)
        .then(count => count > 0 ? this.find(id) : null)
}

function remove(id) {
    return db('hashtags')
        .where('id', id)
        .del()
}