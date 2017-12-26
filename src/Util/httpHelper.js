import axios from 'axios';
import config from '../config.js';

const HttpHelper = (url, method, reqData, callback) => {
    if (`${config.credentialsFlag}` == 'false'){
        var credentialFlag = false;
    }else{
        var credentialFlag = true;
    }
    if (method.toLowerCase() == 'post') {
        if (reqData == undefined) {
            reqData = {};
        }
        var configs = {
            headers: { 'Content-Type': 'application/json'},
            'withCredentials' : credentialFlag
        };
        return new Promise((resolve, reject) => {
            axios.post(url, reqData, config)
                .then(function (response) {
                    if (response.status == 200) {
                      callback(null, response)
                        resolve(response);

                    } else if (response.status == 404 || response.status == 500) {
                      callback(null, err)
                      return err;
                    }
                })
                .catch(function (error) {
                  callback(null, err)
                  return err;
                });
        });
    }
    else {
        var configs = {
            headers: { 'Content-Type': 'application/json' },
            'withCredentials' : credentialFlag
        };
        return new Promise((resolve, reject) => {
            axios.get(url, configs)
                .then(function (response) {
                    if (response.status == 200) {
                        console.log(url, response.data);
                        resolve(response.data);
                    } else if (response.status == 404 || response.status == 500) {
                        reject();
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    reject();
                });
        });

   }

};

export default HttpHelper;
