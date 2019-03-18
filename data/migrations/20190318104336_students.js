
exports.up = function (knex, Promise) {
    return knex.schema.createTable('students', function (students) {
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
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('students');
};
