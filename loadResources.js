// load and catalogue all files in a dir.
var fs = require('fs');
var path = require('path');

var self = module.exports;

self.loadConfig = (resourceDirPath) => {
  console.log(resourceDirPath,11);
  var files = fs.readdirSync(resourceDirPath);
  // if (files) console.log(files);
};

self.main = (path1, tld = null)  => {
  var result;
  path1 = path.normalize(path1);
  path1 = path.join(__dirname, path1);
  result = self.loadConfig(path1);
};

self.main('path');
// self.main('test', 'config');


process.exit();
//
//   var obj = {}, errors = [];
//
//   var validationRoot = path.resolve(__dirname, '../validators/config');
//   if (isType(configNames, 'string')) {
//     if (configNames.slice(-3) !== '.js') {
//       configNames += '.js';
//     }
//     configNames = [configNames];
//   }
//   if (!configNames) {
//     configNames = getFilesSync(configRoot);
//   }
//
//   configNames.forEach(configName => {
//     var config;
//
//     // Load config.
//     var configPath = path.join(configRoot, configName);
//     if (!fileExists(configPath)) {
//       console.error(`Add a "./config/${configName}" file.`);
//       return;
//     }
//     config = require(configPath);
//
//     // Validate config.
//     var validatorPath = path.join(validationRoot, configName);
//     var validator = require(validatorPath);
//     if (validator[configName]) {
//       var err =  validator[configName].call(null, config, configName);
//       if (err) {
//         errors.push(err);
//         return;
//       }
//     }
//
//     configName = configName.slice(0, -3); // Remove trailing ".js" suffix.
//     obj[configName] = config;
//   });
//
//   return obj;
// };
