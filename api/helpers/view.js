module.exports = {
  friendlyName: 'View',
  description: 'View something.',
  inputs: {
    numUsers: {
      friendlyName: 'Number of users',
      description: 'The maximum number of users to retrieve.',
      type: 'number',
      defaultsTo: 5
    },
  },
  exits: {
    success: {
      description: 'All done.',
    },
    recordNotFound: {
      description: 'All done error.',
    },
  },
  fn: async function (inputs, exits) {
    // TODO
    console.log('alsdkfjaldksfj');
    console.log(inputs);
    console.log(exits);
    //throw 'recordNotFound';
    return exits.success('=)');
  }
};

