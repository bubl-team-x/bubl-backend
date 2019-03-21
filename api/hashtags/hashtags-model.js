const db = require('../../data/dbConfig');

module.exports = {
    find,
    findById,
    insert,
    update,
    remove,
    add
}

function find(id) {
    let query = db('hashtags');

    if (id) {
        return query
            .where('id', id)
            .first()
    }

    return query
        .select('label')
        .orderBy('label')
}

function findById(id) {
    return db('hashtags')
        .where({ id })
        .first()
}

async function add(hashtag) {
    const [id] = await db('hashtags').insert(hashtag)
    return findById(id)
}

async function insert(hashtag) {
    db('hashtags')
        .insert(hashtag)
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