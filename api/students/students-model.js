const db = require('../../data/dbConfig');

module.exports = {
    find,
    findStudentById,
    findStudentBy,
    add,
    update,
    remove
}


function find() {
    return db('students')
        .select('id', 'student_name', 'password', 'school_name', 'age', 'height', 'hobbies')
}

function findStudentBy(filter) {
    return db('students')
        .where(filter)
}

function findStudentById(id) {
    return db('students')
        .where({ id })
        .first()
}

async function add(student) {
    const [id] = await db('students').insert(student)
    return findStudentById(id)
}

function update(id, changes) {
    return db('students')
        .where('id', id)
        .update(changes)
        .then(count => count > 0 ? this.find(id) : null)
}

function remove(id) {
    return db('students')
        .where('id', id)
        .del()
}