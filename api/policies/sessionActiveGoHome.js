module.exports = async function (req, res, proceed) {
  // If `req.session.state` is active, redirect to BASE_URL
  if (req.session.state == 'active') {
    return res.redirect(sails.config.globals.data.base_url);
  }
  //--•
  // Otherwise, continue.
  return proceed();
};