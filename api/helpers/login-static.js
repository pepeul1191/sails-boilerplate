module.exports = {
  friendlyName: 'Login',
  description: 'Login something.',
  inputs: {
  },
  exits: {
    success: {
      description: 'All done.',
    },
  },
  fn: async function (inputs, exits) {
    var rpta = {
      css: [],
      js: [],
    };
    // css
    if(sails.config.globals.data.static == 'dev'){
      rpta.css = [
        'bower_components/bootstrap/dist/css/bootstrap.min',
        'bower_components/font-awesome/css/font-awesome.min',
        'styles/constants',
        'styles/styles',
        'styles/login',
      ];
    } else if(sails.config.globals.data.static == 'prod'){
      rpta.css = [
        'dist/test.min'
      ];
    }
    // js
    if(sails.config.globals.data.static == 'dev'){
      rpta.js = [
      ];
    } else if (sails.config.globals.data.static == 'prod'){
      rpta.js = [
      ];
    }
    // success
    return exits.success(rpta);
  }
};

