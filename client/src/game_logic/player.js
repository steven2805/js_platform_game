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
var imgFall = document.createElement('img');
imgFall.src = "/images/playerFall.png"
var imgFallLeft = document.createElement('img');
imgFallLeft.src = "/images/playerFallLeft.png"

Player.prototype.draw = function() {
  if (this.falling && this.drawRight) {
    this.context.drawImage(imgFall, this.position[0], this.position[1], 34, 40);
  }
  else if (this.falling && !this.drawRight) {
    this.context.drawImage(imgFallLeft, this.position[0], this.position[1], 34, 40);
  } 
  else if (this.drawRight) {
    this.context.drawImage(imgRight, this.position[0], this.position[1], 34, 40);
  }
  else {
    this.context.drawImage(imgLeft, this.position[0], this.position[1], 34, 40);
    //this.position = coords;
  }
};

Player.prototype.delete = function() {
  this.context.clearRect(this.position[0], this.position[1], 34, 40);
};

Player.prototype.fallDeath = function() {
  this.lives--;
  console.log(this.lives)
  this.postion = this.startingPosition;
};

module.exports = Player;