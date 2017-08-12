var levelTest = require('./levels');
var Level = require('./level_constructor');
var Player = require('./player');

var leftKeyPressed = false;
var rightKeyPressed = false;

var keyDownHandler = function(evt) {
  if (evt.keyCode === 77) {
    rightKeyPressed = true;
  }
  else if (evt.keyCode === 78) {
    leftKeyPressed = true;
  }
} 

var keyUpHandler = function(evt) {
  if (evt.keyCode === 77) {
    rightKeyPressed = false;
  }
  else if (evt.keyCode === 78) {
    leftKeyPressed = false;
  }
}

// var drawPlayer = function 


var gameApp = function() {
  var levelOne = new Level(levelTest);
  levelOne.setUpMap();
  var player = new Player(levelOne.playerStart);
  player.draw([levelOne.playerStart[0], levelOne.playerStart[1] + 40]);

  setInterval(function() {
  var oldCoords = player.position;
  var newCoords = oldCoords;

  document.addEventListener('keydown', keyDownHandler, false)
  document.addEventListener('keyup', keyUpHandler, false)

    if (rightKeyPressed) {
      newCoords = [oldCoords[0] + 10, oldCoords[1]];
      player.draw(newCoords);
      oldCoords = newCoords;
    }
    if (leftKeyPressed) {
      newCoords = [oldCoords[0] - 10, oldCoords[1]];
      player.draw(newCoords);
      oldCoords = newCoords;
    }
  }, 10)
 
  
  
  
}

window.addEventListener('load', gameApp);