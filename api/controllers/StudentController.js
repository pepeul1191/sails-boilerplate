/**
 * StudentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Student = require('../models/Student');

module.exports = {
  async list(req, res) {
    var students = await Student.findAll({});
    return res.send(JSON.stringify(students));
  }, 
};

