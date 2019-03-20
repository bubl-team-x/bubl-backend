
exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('hashtags');
};
