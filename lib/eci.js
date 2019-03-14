'use strict';

const EciClient = require('aliyun-eci-node-sdk');

module.exports = app => {
  app.addSingleton('aliyunEci', (config) => {
    const client = new EciClient(config);
    return client;
  });
};
