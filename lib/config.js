var info = require('../package.json');
var conf = require('rc')(info.name, {
  'server_host': 'www.mitro.co',
  'server_port': 443,
  'deviceId': 'mitro-cli'
});

module.exports = conf;

