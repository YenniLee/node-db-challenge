exports.seed = function (knex, Promise) {
  return knex('projects').insert([{
      name: 'magic mirror',
      description: 'Buuild a mirro that displays data, time, and weather.',
      completed: 0
    },
    {
      name: 'Boardgame Display',
      description: 'Build a shelf to display boardgames.',
      completed: 1
    }
  ]);
};