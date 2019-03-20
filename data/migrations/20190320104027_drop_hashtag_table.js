exports.up = function (knex, Promise) {
    return knex.schema.createTable('hashtags', function (hashtags) {
        hashtags
            .increments()

        hashtags
            .string('description', 128)
            .notNullable()
            .unique()
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('hashtags');
};
