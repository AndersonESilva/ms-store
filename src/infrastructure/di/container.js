const { createContainer, asValue, asFunction } = require('awilix');

const config = require('../../../config');
const database = require('../../infrastructure/database');
const repository = require('../../infrastructure/repositories');
const service = require('../../application/services'); 
const controller = require('../../interfaces/controllers'); 
const route = require('../../interfaces/routes'); 

const container = createContainer();

container
    .register({
        config: asValue(config),
        database: asFunction(database).singleton(),
        repository: asFunction(repository).singleton(),
        service: asFunction(service).singleton(),
        controller: asFunction(controller).singleton(),
        route: asFunction(route).singleton()
    })

module.exports = container

