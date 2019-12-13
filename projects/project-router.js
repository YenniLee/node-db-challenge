const express = require('express');

const Project = require('./project-model.js');
const Task = require('../tasks/task-model.js');

const router = express.Router();


router.get('/', (req, res) => {
    Project.getProjects()
           .then(projects => {
               res.status(200).json(projects);
           })
           .catch(err => {
               res.status(500).json({ message: `Unable to get project. ${err}` });
           });
});

router.get('/:id', (req, res) => {
    res.json(req.project);
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


module.exports = router;