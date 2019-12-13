const express = require('express');

const Task = require('./task-model.js');

const router = express.Router();


router.get('/', (req, res) => {
    Task.getTasks()
           .then(tasks => {
            const convertedTasks = [...tasks].map( task => {
                task.completed = Boolean(task.completed);
                return task;
              });
              res.status(200).json(convertedTasks); 
            })
           .catch(err => {
               res.status(500).json({ message: `Unable to get tasks. ${err}` });
           });
});

router.post('/', (req, res) => {
    const task = req.body;
    console.log(task)
    Task.addTask(task)
           .then(newTask => {
               res.status(201).json(newTask);
           })
           .catch(err => {
               res.status(500).json({ message: `Unable to add resource. ${err}` });
           }); 
});

  

module.exports = router;