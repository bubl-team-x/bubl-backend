
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('hashtags').del()
    .then(function () {
      // Inserts seed entries
      return knex('hashtags').insert([
        { id: 1, label: 'Memes' },
        { id: 2, label: 'Anime' },
        { id: 3, label: 'Computers' },
        { id: 4, label: 'Anime' },
        { id: 5, label: 'Anime' },
        { id: 6, label: 'Activism' },
        { id: 7, label: 'Anime' },
        { id: 8, label: 'Computers' },
        { id: 9, label: 'Photography' },
        { id: 10, label: 'Computers' },
        { id: 11, label: 'Biology' },
        { id: 12, label: 'Chemistry' },
        { id: 13, label: 'Chemistry' },
        { id: 14, label: 'Anime' },
        { id: 15, label: 'Chemistry' },
        { id: 16, label: 'Chemistry' },
        { id: 17, label: 'Physics' },
        { id: 18, label: 'Activism' },
        { id: 19, label: 'Activism' },
        { id: 20, label: 'Hiking' },
        { id: 21, label: 'Activism' },
        { id: 22, label: 'Activism' },
        { id: 23, label: 'History' },
        { id: 24, label: 'Coding' },
        { id: 25, label: 'Instagram' },
        { id: 26, label: 'Facebook' },
        { id: 27, label: 'Video Games' },
        { id: 28, label: 'Music' },
        { id: 29, label: 'Math' },
        { id: 30, label: 'Anime' },
      ]);
    });
};
