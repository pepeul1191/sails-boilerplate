/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For more information on configuration, check out:
 * https://sailsjs.com/config/http
 */

module.exports.http = {

  /****************************************************************************
  *                                                                           *
  * Sails/Express middleware to run for every HTTP request.                   *
  * (Only applies to HTTP requests -- not virtual WebSocket requests.)        *
  *                                                                           *
  * https://sailsjs.com/documentation/concepts/middleware                     *
  *                                                                           *
  ****************************************************************************/

  middleware: {

    /***************************************************************************
    *                                                                          *
    * The order in which middleware should be run for HTTP requests.           *
    * (This Sails app's routes are handled by the "router" middleware below.)  *
    *                                                                          *
    ***************************************************************************/

    order: [
      'cookieParser',
      'session',
      'bodyParser',
      'compress',
      'poweredBy',
      'router',
      'www',
      'favicon',
      'error',
    ],

    error: (function (req, res, next){
      var lang = 'sp';
      try {
        if (req.method == 'GET'){
          var static_extensions = ['css', 'js', 'png', 'jpg', ];
          var resource = req.url;
          resource = resource.split('.');
          if(static_extensions.indexOf(resource[resource.length - 1]) == -1){
            res.redirect(sails.config.globals.data.base_url + 'error/access/404');
          }else{
            next();
          }
        }else{ 
          res.status(404);
          return res.send(sails.config.contents.get('error')[lang].error_handler.post_404);
        }
        // next();
      } catch (err) {
        console.log(err);
        res.status(500);
        return res.send(err.stack);
      }
    }),
    /***************************************************************************
    *                                                                          *
    * The body parser that will handle incoming multipart HTTP requests.       *
    *                                                                          *
    * https://sailsjs.com/config/http#?customizing-the-body-parser             *
    *                                                                          *
    ***************************************************************************/

    // bodyParser: (function _configureBodyParser(){
    //   var skipper = require('skipper');
    //   var middlewareFn = skipper({ strict: true });
    //   return middlewareFn;
    // })(),

  },

};
