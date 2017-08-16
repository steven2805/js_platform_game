var Sound = require('./sound');
var myDieSound;

var Player = function(position) {
  this.startingPosition = position;
  this.position = position;
  this.falling = true;
  this.walkRight = true;
  this.walkLeft = true;
  this.canJump = true;
  this.hasKey = false;
  this.lives = 3;
  this.setHalfJump = false;
  this.drawRight = true;
  this.myDieSound = new Sound("/sounds/dudu.mp3");
  this.canvas = document.getElementById("game-canvas");
  this.context = this.canvas.getContext("2d");
}

var imgRight = document.createElement('img');
imgRight.src = "/images/playerRight.png"
var imgLeft = document.createElement('img');
imgLeft.src = "/images/playerLeft.png"

Player.prototype.draw = function() {

  // this.context.clearRect(this.position[0], this.position[1], 34, 40);
  if (this.drawRight) {
    this.context.drawImage(imgRight, this.position[0], this.position[1], 34, 40);
    //this.position = coords;
  }
  else {
    this.context.drawImage(imgLeft, this.position[0], this.position[1], 34, 40);
    //this.position = coords;
  }
};

Player.prototype.delete = function() {
  this.context.clearRect(this.position[0], this.position[1], 34, 40);
};

// Player.prototype.drawRight = function(coords) {
//   this.context.clearRect(this.position[0], this.position[1], 34, 40);
//   this.context.drawImage(imgRight, coords[0], coords[1], 34, 40);
//   this.position = coords;
// };

// Player.prototype.drawLeft = function(coords) {
//   this.context.clearRect(this.position[0], this.position[1], 34, 40);
//   this.context.drawImage(imgLeft, coords[0], coords[1], 34, 40);
//   this.position = coords;
// };

Player.prototype.fallDeath = function(coords) {
  this.lives--;
  this.draw(coords);
};

module.exports = Player;