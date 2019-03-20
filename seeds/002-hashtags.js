
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('hashtags').del()
    .then(function () {
      // Inserts seed entries
      return knex('hashtags').insert([
        { id: 1, label: 'Hiking' },
        { id: 2, label: 'Video Games' },
        { id: 3, label: 'Memes' },
        { id: 4, label: 'Anime' },
        { id: 5, label: 'Anime' },
        { id: 6, label: 'Anime' },
        { id: 7, label: 'Anime' },
        { id: 8, label: 'Anime' },
        { id: 9, label: 'Anime' },
        { id: 10, label: 'Computers' },
        { id: 11, label: 'Computers' },
        { id: 12, label: 'Computers' },
        { id: 13, label: 'Biology' },
        { id: 14, label: 'Chemistry' },
        { id: 15, label: 'Chemistry' },
        { id: 16, label: 'Chemistry' },
        { id: 17, label: 'Chemistry' },
        { id: 18, label: 'Physics' },
        { id: 19, label: 'Activism' },
        { id: 20, label: 'Activism' },
        { id: 21, label: 'Activism' },
        { id: 22, label: 'Activism' },
        { id: 23, label: 'Activism' },
        { id: 24, label: 'history' },
        { id: 25, label: 'Coding' },
        { id: 26, label: 'Instagram' },
        { id: 27, label: 'Facebook' },
        { id: 28, label: 'Photography' },
        { id: 29, label: 'Music' },
        { id: 30, label: 'Math' }
      ]);
    });
};
