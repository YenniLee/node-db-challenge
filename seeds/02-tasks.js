  
exports.seed = function (knex, Promise) {
  // Inserts seed entries
  return knex('tasks').insert([{
      description: 'order parts',
      notes: 'try to google stuff',
      completed: 0,
      project_id: 1
    },
    {
      description: 'assembly!',
      notes: '',
      completed: 0,
      project_id: 1
    },
    {
      description: 'Make a design',
      notes: 'Check Home Depot for free plans',
      completed: 0,
      project_id: 2
    },
    {
      description: 'Get materials for hardware store',
      notes: 'have all pieces cut to size',
      completed: 0,
      project_id: 2
    }
  ]);
};