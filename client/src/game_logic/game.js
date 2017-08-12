var levelTest = require('./levels');
var Level = require('./level_constructor');
var Player = require('./player');
var collision = require('./collision');

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




var gameApp = function() {
  var levelOne = new Level(levelTest);
  levelOne.setUpMap();
  var player = new Player(levelOne.playerStart);
  player.draw([levelOne.playerStart[0], levelOne.playerStart[1]]);

  var collisionsArray = collision(levelOne.walls);


    // console.log(playerBottom);
    // console.log(collisionsArray);
    var boobs;
    
  setInterval(function() {
    var oldCoords = player.position;
    var newCoords = oldCoords;

    var playerBottom = [player.position[0] + 10, player.position[1] + 40];

    // collisionsArray.forEach(function(coords) {
    // var x = coords[0];
    // var y = coords[1];
    //   if (playerBottom.equals(coords)) {
    //     player.falling = false;
    //   }
    //   else {
    //     player.falling = true;
    //   }
    // })


    // if (player.falling === true) {
    //   newCoords = [oldCoords[0], oldCoords[1] + 10];
    //   player.draw(newCoords);
    //   oldCoords = newCoords;
    // }

    document.addEventListener('keydown', keyDownHandler, false)
    document.addEventListener('keyup', keyUpHandler, false)

    if (rightKeyPressed) {
      newCoords = [oldCoords[0] + 10, oldCoords[1]];
      player.draw(newCoords);
      oldCoords = newCoords;
      console.log(boobs);

    }
    if (leftKeyPressed) {
      newCoords = [oldCoords[0] - 10, oldCoords[1]];
      player.draw(newCoords);
      oldCoords = newCoords;
    }
  }, 10)

  
  
  
}

window.addEventListener('load', gameApp);