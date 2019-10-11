'use strict';

const EciClient = require('aliyun-eci-node-sdk').default;

module.exports = app => {
  app.addSingleton('aliyunEci', (config) => {
    const client = new EciClient(config);
    return client;
  });
};
