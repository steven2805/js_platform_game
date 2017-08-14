var levelTest = require('./levels');
var Level = require('./level_constructor');
var Player = require('./player');
var Collision = require('./collision');

var leftKeyPressed = false;
var rightKeyPressed = false;
var isJumping = false;



var keyDownHandler = function(evt) {
  if (evt.keyCode === 77) {
    rightKeyPressed = true;
  }
  if (evt.keyCode === 78) {
    leftKeyPressed = true;
  }
  if (evt.keyCode === 74){
    isJumping = true;
  }
} 

var keyUpHandler = function(evt) {
  if (evt.keyCode === 77) {
    rightKeyPressed = false;
  }
  if (evt.keyCode === 78) {
    leftKeyPressed = false;
  }
  if (evt.keyCode === 74) {
    isJumping = false;
  }
}


var gameApp = function() {
  var levelOne = new Level(levelTest);
  levelOne.setUpMap();
  var player = new Player(levelOne.playerStart);
  player.draw([levelOne.playerStart[0], levelOne.playerStart[1]]);


  // Change the collisions to a constructor which contains both walls and ground
  var collisions = new Collision(levelOne.walls);
  console.log(collisions)

  setInterval(function() {
    var oldCoords = player.position;
    var newCoords = oldCoords;



  // Added in player right and left side calculations

  var playerBottom = [player.position[0], player.position[1] + 40];
  var playerRightSide = [player.position[0] + 20, player.position[1]];
  var playerLeftSide = [player.position[0], player.position[1]];

  // Completely re-done the ground collidier logic 

  for(var ground of collisions.ground){
    if((playerBottom[0] === ground[0] && playerBottom[1] === ground[1]) || (playerBottom[0] + 20 === ground[0] && playerBottom[1] === ground[1])){
      player.falling = false;
      break;
    }
    else
    {
      player.falling = true;
    }
  }

  // This is the logic for wall collisions on the right of the player

  for(var wall of collisions.walls){

    if((playerRightSide[0] === wall[0] && playerRightSide[1] === wall[1]) || (playerRightSide[0] === wall[0] && playerRightSide[1] + 39 === wall[1])){
      player.walkRight = false;
      // console.log("contact with wall Right")
      break;
    }
    else
    {
      player.walkRight = true;
    }
  }

  // Code for left collisions, walls once again

  for(var wall of collisions.walls){
    if(playerLeftSide[0] === wall[0] && playerLeftSide[1] === wall[1]){
      player.walkLeft = false;
      // console.log("contact with wall left")
      break;
    }
    else
    {
      player.walkLeft = true;
    }
  }

  // the code we wrote as a group    

  if (player.falling === true) {
    newCoords = [oldCoords[0], oldCoords[1] + 10];
    player.draw(newCoords);
    oldCoords = newCoords;
  }

  document.addEventListener('keydown', keyDownHandler, false)
  document.addEventListener('keyup', keyUpHandler, false)



  // restricting the key press if there is a collision


  if (rightKeyPressed && player.walkRight === true) {
    if(oldCoords[0] + 10 >= 1280){
    newCoords = [oldCoords[0], oldCoords[1]];
    player.draw(newCoords);
    oldCoords = newCoords;
  }else{
    newCoords = [oldCoords[0] + 10, oldCoords[1]];
    player.draw(newCoords);
    oldCoords = newCoords;
  }

  }
  if (leftKeyPressed && player.walkLeft === true) {
    if(oldCoords[0] <= 0){
      newCoords = [oldCoords[0], oldCoords[1]];
      player.draw(newCoords);
      oldCoords = newCoords;
    }else{
      newCoords = [oldCoords[0] - 10, oldCoords[1]];
      player.draw(newCoords);
      oldCoords = newCoords;
    }
  }

  if(isJumping === true && player.falling === false){
    newCoords = [oldCoords[0], oldCoords[1] - 40];
    player.draw(newCoords);
    oldCoords = newCoords;
    isjumping = false;
  }
}, 50)




}

window.addEventListener('load', gameApp);