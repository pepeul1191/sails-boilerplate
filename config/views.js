/**
 * View Engine Configuration
 * (sails.config.views)
 *
 * Server-sent views are a secure and effective way to get your app up
 * and running. Views are normally served from actions.  Below, you can
 * configure your templating language/framework of choice and configure
 * Sails' layout support.
 *
 * For details on available options for configuring server-side views, check out:
 * https://sailsjs.com/config/views
 *
 * For more background information on views and partials in Sails, check out:
 * https://sailsjs.com/docs/concepts/views
 */

module.exports.views = {

  /***************************************************************************
  *                                                                          *
  * Extension to use for your views. When calling `res.view()` in an action, *
  * you can leave this extension off. For example, calling                   *
  * `res.view('homepage')` will (using default settings) look for a          *
  * `views/homepage.ejs` file.                                               *
  *                                                                          *
  ***************************************************************************/

  // extension: 'ejs',

  /***************************************************************************
  *                                                                          *
  * The path (relative to the views directory, and without extension) to     *
  * the default layout file to use, or `false` to disable layouts entirely.  *
  *                                                                          *
  * Note that layouts only work with the built-in EJS view engine!           *
  *                                                                          *
  ***************************************************************************/

  layout: false,

  // custom functions

  loadCss: function(csss) {
    var rpta = '';
    if (typeof csss != 'undefined'){
      for(var i = 0; i < csss.length; i++){
        rpta = rpta + '<link rel="stylesheet" type="text/css" href="'+ sails.config.globals.data.static_url + csss[i] + '.css" />'
      }
    }
    return rpta;
  },
  
  loadJs: function(jss) {
    var rpta = '';
    if (typeof jss != 'undefined'){
      for(var i = 0; i < jss.length; i++){
        rpta = rpta + '<script src="' + sails.config.globals.data.static_url + jss[i] + '.js"></script>'
      }
    }
    return rpta;
  },

  base_url: function(){
    return sails.config.globals.data.base_url;
  },

  static_url: function(){
    return sails.config.globals.data.static_url;
  },

  csrf_secret: function(){
    return sails.config.globals.data.csrf.secret;
  },

  csrf_key: function(){
    return sails.config.globals.data.csrf.key;
  },
};
