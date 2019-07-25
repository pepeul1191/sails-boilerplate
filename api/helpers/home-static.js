module.exports = {
  friendlyName: 'Home static',
  description: '',
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
        'assets/css/constants',
        'assets/css/styles',
        'assets/css/home',
      ];
    } else if(sails.config.globals.data.static == 'prod'){
      rpta.css = [
        'dist/test.min'
      ];
    }
    // js
    if(sails.config.globals.data.static == 'dev'){
      rpta.js = [
        'bower_components/jquery/dist/jquery.min',
        'bower_components/bootstrap/dist/js/bootstrap.min',
      ];
    } else if (sails.config.globals.data.static == 'prod'){
      rpta.js = [
      ];
    }
    // success
    return exits.success(rpta);
  }
};

