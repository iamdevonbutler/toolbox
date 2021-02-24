// npm i --saveDev toolbox
var toolbox = require('toolbox');

//
var algo = toolbox.get('name');
algo();

//
var utils = toolbox.getAll();

//
var utils = toolbox.getAll(['name', 'name2']);

///////////////////////////////////////////

toolbox.test('name', '@version');

///////////////////////////////////////////

var newAlgo = console.log(1);
toolbox.change('name', newAlggo);

toolbox.versions('name', newAlggo);

///////////////////////////////////////////
console.log(toolbox.status());

///////////////////////////////////////////

//
//toolbox.push();
//toolbox.delete();
