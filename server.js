const express = require('express');

const resourceRouter = require('./resources/resource-router.js');
const projectRouter = require('./projects/project-router.js');
const taskRouter = require('./tasks/task-router.js');

const server = express();


server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Sprint Challenge: Node Databases </h2>`)
});


module.exports = server;
