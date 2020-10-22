'use strict';

const path = require('path');
const Sequelize = require('sequelize');
const dbParams = require('config').get('db');
const sequelize = new Sequelize(dbParams.database, dbParams.username, dbParams.password, dbParams);
const basename = path.basename(module.filename);
const db = {
};

require('fs')
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.indexOf('.model.js') === file.length - 9);
    })
    .forEach(file => {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
    if ('loadScopes' in db[modelName]) {
        db[modelName].loadScopes(db);
    }

});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;