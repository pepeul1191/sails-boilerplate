/**
 * HomeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async index(req, res) {
    var x = await sails.helpers.view(2).tolerate('recordNotFound', ()=>{
      // ... handle the case where no users were found. For example:
      sails.log.verbose(
        'Worth noting: Just handled a request for active users during a time frame '+
        'where no users were found.  Anyway, I didn\'t think this was possible, because '+
        'our app is so cool and popular.  But there you have it.'
      );
    });;
    console.log('2+++++++++++++++++++++++++++++');
    console.log(x);
    console.log('3+++++++++++++++++++++++++++++');
    sails.log.debug('TODO: implement???');
    var locals = {
      constants: sails.config.globals.data,
    };
    // return res.send('hola');
    return res.view('home/index', locals);
  }, 
};
