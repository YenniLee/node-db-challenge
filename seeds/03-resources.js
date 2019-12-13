exports.seed = function (knex, Promise) {

  return knex('resources').insert([{
      name: 'Home Depot',
      description: 'Hardware Store',
    },
    {
      name: 'Google',
      description: 'https://www.instructables.com/id/How-to-Build-a-Raspberry-Pi-Smart-Mirror/',
    },
    {
      name: 'Amazon',
      description: 'https://www.amazon.com/slp/board-game-shelves/q372vybk9edeucp',
    }
  ]);
};