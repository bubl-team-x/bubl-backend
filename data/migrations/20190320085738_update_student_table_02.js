
exports.up = function (knex, Promise) {
    return knex.schema.table('students', function (students) {
        students
            .dropColumn('student_name')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('students');
};
