const express = require('express');

const Task = require('./task-model.js');

const router = express.Router();


router.get('/', (req, res) => {
    Task.getTasks()
           .then(tasks => {
               res.status(200).json(tasks);
           })
           .catch(err => {
               res.status(500).json({ message: `Unable to get tasks. ${err}` });
           });
});



module.exports = router;