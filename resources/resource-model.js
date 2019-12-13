const db = require('../data/db-config.js');


function getResources() {
    return db('resources');
};

function addResource(resource) {
    return db('resources')
        .insert(resource)
            .then(ids => {
                const id = ids[0];

                return db('resources').where({ id }).first()
                .then(resource => {
                    return resource;
                })
            })
};

module.exports = {
    getResources,
    addResource
};