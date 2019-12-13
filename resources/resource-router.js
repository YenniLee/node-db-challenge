const express = require('express');

const Resource = require('./resource-model.js');

const router = express.Router();


router.get('/', (req, res) => {
    Resource.getResources()
           .then(resources => {
               res.status(200).json(resources);
           })
           .catch(err => {
               res.status(500).json({ message: `Unable to get resource. ${err}` });
           });
});

router.post('/', (req, res) => {
    const resource = req.body;

    Resource.addResource(resource)
           .then(addedResource => {
               res.status(201).json(addedResource);
           })
           .catch(err => {
               res.status(500).json({ message: `Unable to add resource. ${err}` });
           }); 
});

module.exports = router;