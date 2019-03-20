
exports.up = function (knex, Promise) {
    return knex.schema.createTable('hashtags', function (hashtags) {
        hashtags
            .increments()

        hashtags
            .string('label', 128)
            .notNullable()

        hashtags
            .integer('value')
            .defaultTo(1)
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('hashtags');
};
