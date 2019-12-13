const express = require('express');

const Project = require('./project-model.js');
const Task = require('../tasks/task-model.js');

const router = express.Router();


router.get('/', (req, res) => {
    Project.getProjects()
           .then(projects => {
            const convertedProjects = [...projects].map( project => {
                project.completed = Boolean(project.completed);
                return project;
              });
              res.status(200).json(convertedProjects);
            })
           .catch(err => {
               res.status(500).json({ message: `Unable to get project. ${err}` });
           });
});

router.get('/:id', (req, res) => {
    res.status(200).json(req.project);
});

router.post('/', (req, res) => {
    const project = req.body;

    Project.addProject(project)
           .then(addedProject => {
               res.status(201).json(addedProject);
           })
           .catch(err => {
               res.status(500).json({ message: `Unable to add project. ${err}` });
           }); 
});

router.post('/:id/tasks', (req, res) => {
    const task = req.body;
    const { id } = req.params;

    Task.addTask(task, id)
           .then(addedTask => {
               res.status(201).json(addedTask);
           })
           .catch(err => {
               res.status(500).json({
                   message: 'An error occurred while trying to add the task to the database',
                   error: err
               });
           }); 
});


module.exports = router;