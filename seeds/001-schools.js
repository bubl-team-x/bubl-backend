
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('schools')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('schools').insert([
        { id: 1, school_name: 'El Cerrito Middle School' },
        { id: 2, school_name: 'Corona Fundamental Intermediate School' },
        { id: 3, school_name: 'Auburndale Intermediate School' },
        { id: 4, school_name: 'Letha Raney Intermediate School' },
        { id: 5, school_name: 'Citrus Hills Intermediate School' }
      ]);
    });
};
