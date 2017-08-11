var levelTest = require('./levels');
var Level = require('./level_constructor');
var Player = require('./player');



var gameApp = function() {
  var levelOne = new Level(levelTest);
  levelOne.setUpMap();
  var player = new Player(levelOne.playerStart);
  player.draw(levelOne.playerStart);

  console.log(player.startingCoords);

  window.addEventListener('keydown', );
}

window.addEventListener('load', gameApp);