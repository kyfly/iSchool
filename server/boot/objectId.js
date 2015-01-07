var ObjectID = require('mongodb').ObjectID;

module.exports = function setupGenerateId(server) {
    server.dataSources.db.connector.generateId = function () {
        return new ObjectID();
    };
};