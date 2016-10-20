let authenticationFilter = require('./security/authentication-filter.js');
let logger = require('../logger');

module.exports = (req, res, next) => {

  let promiseChain = Promise.resolve()

  // Authentication
  .then(() => authenticationFilter(req))
  
  // All passed at this point
  .then(() => { next(); })

  // Catch any failures or rejects
  .catch(error => {
    logger.error(error);
    req.session.destroy();
    res.redirect('/');
  });

}