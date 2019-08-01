/**
 * LoginController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const userAccessService = require('../services/access/user_service');

module.exports = {
  async index(req, res) {
    // data
    var lang = 'sp';
    // response
    var locals = {
      constants: sails.config.globals.data,
      statics: await sails.helpers.loginStatic(),
      title: sails.config.contents.titles()[lang]['login_index'],
      contents: sails.config.contents.get('login')[lang],
      message: '',
      message_status: ' ',
      lang: lang,
    };
    // console.log(req.session);
    return res.view('login/index', locals);
  }, 
  async indexAccess(req, res) {
    // data
    var lang = 'sp';
    var message_status = 'color-error';
    var message = '';
    // check user in service
    var response = await userAccessService.access(req.body.user, req.body.pass);
    if(response.status == 200){
      if(response.body == 'activation_pending'){
        message = 'Activación de usuario pendiente';
      }else if(response.body == 'suspended'){
        message = 'Usuario suspendido';
      }else if(response.body == 'deleted'){
        message = 'Usuario eliminado';
      }else if(response.body == 'active'){
        // create session and redirect
        req.session.state = 'active';
        req.session.user = req.body.user;
        req.session.moment = new Date();
        return res.redirect(sails.config.globals.data.base_url);
      }
    }else if(response.status == 409){
      message = 'Usuario y/o contraseña no coinciden';
    }else{
      message = 'Ocurrió un error en validar el acceso';
    }
    // response
    var locals = {
      constants: sails.config.globals.data,
      statics: await sails.helpers.loginStatic(),
      title: sails.config.contents.titles()[lang]['login_index'],
      contents: sails.config.contents.get('login')[lang],
      message: message,
      message_status: message_status,
      lang: lang,
    };
    return res.view('login/index', locals);
  }, 
  async signIn(req, res){
    // data
    var lang = 'sp';
    // response
    var locals = {
      constants: sails.config.globals.data,
      statics: await sails.helpers.loginStatic(),
      title: sails.config.contents.titles()[lang]['login_sign_in'],
      contents: sails.config.contents.get('login')[lang],
      message: '',
      message_status: ' ',
      lang: lang,
    };
    // console.log(req.session);
    return res.view('login/sign_in', locals);
  },
  async create(req, res){
    // data
    var lang = 'sp';
    var message_status = 'color-error';
    var message = '';
    // check user in service
    var response = await userAccessService.create(
      req.body.user, 
      req.body.pass, 
      req.body.email,
      sails.config.globals.data.system_id,
    );
    if(response.status == 200){
      message = 'Usuario creado, revise su correo para activar su cuenta';
      message_status = 'color-success';
      // TODO: enviar correo de activación con _id y activation_key de JSON.parse(response.body)
    }else if(response.status == 409){
      message = 'Usuario y/o correo repetidos';
    }else{
      message = 'Ocurrió un error en crear el usuario';
    }
    // response
    var locals = {
      constants: sails.config.globals.data,
      statics: await sails.helpers.loginStatic(),
      title: sails.config.contents.titles()[lang]['login_sign_in'],
      contents: sails.config.contents.get('login')[lang],
      message: message,
      message_status: message_status,
      lang: lang,
    };
    return res.view('login/sign_in', locals);
  },
  async resetPassword(req, res){
    // data
    var lang = 'sp';
    // response
    var locals = {
      constants: sails.config.globals.data,
      statics: await sails.helpers.loginStatic(),
      title: sails.config.contents.titles()[lang]['login_sign_in'],
      contents: sails.config.contents.get('login')[lang],
      message: '',
      message_status: ' ',
      lang: lang,
    };
    // console.log(req.session);
    return res.view('login/reset_password', locals);
  },
  async reset(req, res){

  },
  async activate(req, res){

  },
};

