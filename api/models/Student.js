/**
 * Student.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const Sequelize = require('sequelize');

const db = sails.config.datastores.demo;

module.exports = db.define('students', {
	id: { 
    type: Sequelize.INTEGER, 
    primaryKey: true, 
    autoIncrement: true ,
  },
	name: { 
    type: Sequelize.STRING, 
    allowNull: false,  
  },
  code: { 
    type: Sequelize.STRING, 
    allowNull: false,  
  },
});
