var levelTest = require('./levels');
var Level = require('./level_constructor');



var gameApp = function() {
  var levelOne = new Level(levelTest);
  console.log("Test is working");
}

window.addEventListener('load', gameApp);