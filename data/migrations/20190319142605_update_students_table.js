exports.up = function (knex, Promise) {
    return knex.schema.table('students', function (students) {
        students
            .integer('age')

        students
            .string('hobbies', 512)

        students
            .integer('height')

    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('students');
};