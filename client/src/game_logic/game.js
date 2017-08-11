var levelTest = require('./levels');
var Level = require('./level_constructor');



var gameApp = function() {
  var levelOne = new Level(levelTest);
  levelOne.setUpMap();
}

window.addEventListener('load', gameApp);