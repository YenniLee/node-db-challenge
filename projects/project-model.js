const db = require('../data/db-config.js');

function getProjects() {
    return db('projects');
  };

  function getProject(id) {
    return db('projects')
      .where({ 'projects.id': id });
  };
  
  function addProject(project) {
    return db('projects')
      .insert(project);
  };

  module.exports = {
    getProjects,
    getProject,
    addProject
  };