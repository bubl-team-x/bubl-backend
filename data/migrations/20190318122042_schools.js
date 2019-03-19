
exports.up = function (knex, Promise) {
    return knex.schema.createTable('schools', function (schools) {
        schools
            .increments()

        schools
            .string('school_name', 128)
            .notNullable()
            .unique()
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('schools');
};
