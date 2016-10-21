let https = require('https');
let parseString = require('xml2js').parseString;
let querystring = require('querystring');

let logger = require('../logger');

module.exports = (options, data) => {
  return new Promise((resolve, reject) => {

    let logMetadata = {};

    // Create Request
    let req = https.request(options, res => {

      // Log Status & Headers
      logMetadata.status = res.statusCode;
      logMetadata.headers = res.headers;
      logMetadata.message += ` ${res.statusCode}`;

      res.setEncoding('utf8');
      res.on('data', chunk => {

        // Log it
        logMetadata.body = chunk

        // First try json
        try {
          logger.debug('Attempting JSON...');
          resolve(JSON.parse(chunk));
          logger.debug('Success');
        } catch (jsonError) {
          // Alright it's not json, try xml
          logger.debug('Attempting XML...');
          parseString(chunk, (xmlError, result) => {
            if (!xmlError) {
              logger.debug('Success');
              resolve(result);
            } else {
              reject(jsonError + ' | ' + xmlError);
            }
          });
        }
      })

      // Catch errors in response
      .on('error', error => {
        reject(error);
      })

      // And in case if successful call with no data
      .on('end', () => {
        logger.debug('Done');
        logger.info(logMetadata.message, logMetadata);
        resolve();
      });

    });

    // Catch errors in creating the request
    req.on('error', error => {
      reject(error);
    })

    // Write Data
    if (data) {
      if (options.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
        req.write(querystring.stringify(data || {}));
      }
      else {
        req.write(JSON.stringify(data || {}))
      }
    }

    // Done
    req.end();

    // Log it
    logMetadata.message = `Server Request: ${options.method} ${options.host}${options.path}`, { output: req.output };
    logMetadata.method = options.method;
    logMetadata.host = optioms.host;
    logMetadata.path = options.path;
    logMetadata.output = req.output;
  });
}