/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */

var yaml = require('js-yaml');
var fs   = require('fs');
const path = require('path');

module.exports.contents = {

  get: function(file){
    var file_route = path.join(__dirname, '../contents', file + '_content.yml');
    return yaml.safeLoad(fs.readFileSync(file_route), 'utf8');
  },
  
  titles: function(){
    var file_route = path.join(__dirname, '../contents', '_titles.yml');
    return yaml.safeLoad(fs.readFileSync(file_route), 'utf8');
  }
  
};
