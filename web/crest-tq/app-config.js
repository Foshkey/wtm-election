let querystring = require('querystring');

// ============================================================
// APP CONFIG
// If erroring, you must include a app-info.js file, including
// the following:
// 
// module.exports = {
//   clientId: 'Client ID',
//   secretKey: 'Secret Key',
//   callbackUrl: 'Callback URL',
//   scope: ['List of', 'Scopes']
// }
//
// Replacing the strings with the relevant application settings
// found at https://developers.eveonline.com/applications/
// ============================================================
let appInfo = require('./app-info');

// ============================================================
// HELPER FUNCTIONS
// ============================================================
let getEncodedAuthHeader = () => {
  let concatString = `${appInfo.clientId}:${appInfo.secretKey}`;
  return new Buffer(concatString).toString('base64');
}

let getScopeString = () => {
  return appInfo.scope ? appInfo.scope.join(' ') : '';
}

let genSsoUrl = state => {
  let ssoBase = 'https://login.eveonline.com/oauth/authorize';
  let params = {
    response_type: 'code',
    redirect_uri: appInfo.callbackUrl,
    client_id: appInfo.clientId,
    state: state
  }
  if (appInfo.scope && appInfo.scope.length > 0) {
    params.scope = getScopeString();
  }
  return `${ssoBase}?${querystring.stringify(params)}`;
}

module.exports = {
  clientId: appInfo.clientId,
  authHeader: getEncodedAuthHeader(),
  scope: getScopeString(),
  genSsoUrl: genSsoUrl
}