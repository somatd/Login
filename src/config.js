import Helper from './helper/constant';

const ENV = Helper.environment;
let config = {};
const appConfigLocal = require('./config/local.js');
const appConfigDev = require('./config/dev.js');

  window.configs = {};

  if (ENV.deploy_env !== null ){

    if(ENV.deploy_env === 'dev_local'){
      config = appConfigDev;
    }
    if(ENV.deploy_env === 'local'){
      config = appConfigLocal;
    }
}

export default config;
