const exec = require('cordova/exec');
const utils = require('./utils');

const MyPlugin = {
  greet: (name, success, error) => {
    exec(success, error, 'MyPlugin', 'greet', [name]);
  },
  utils
};

module.exports = MyPlugin;
