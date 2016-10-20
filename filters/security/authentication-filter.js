let authService = require('../../web/crest-tq/auth/auth-service');
let logger = require('../../logger');

module.exports = req => {
  return new Promise((resolve, reject) => {
    let authData = req.session.authData;
    logger.debug('authData', { authdata: authData });
    if (!authData || !authData.authenticated || !authData.accessToken) {
      return reject('Authentication data is not valid');
    }

    resolve();
    
    // SSO Access only, eve doesn't support refreshing without scopes
    // if (authService.isExpired(authData)) {
    //   authService.refresh(authData).then(resolve, reject);
    // } else {
    //   resolve();
    // }
  });
}