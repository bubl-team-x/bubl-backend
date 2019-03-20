
exports.up = function (knex, Promise) {
    return knex.schema.table('students', function (students) {
        students
            .increments()

        students
            .string('student_name', 128)
            .notNullable()

        students
            .string('password', 255)
            .notNullable()

        students
            .string('school_name', 128)
            .notNullable()

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
