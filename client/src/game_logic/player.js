var Player = function(position) {
  this.startingPosition = position;
  this.position = position;
  this.falling = true;
  this.walkRight = true;
  this.walkLeft = true;
  this.canJump = true;
  this.hasKey = false;
  this.lives = 3;
}

var imgRight = document.createElement('img');
imgRight.src = "playerRight.png"
var imgLeft = document.createElement('img');
imgLeft.src = "playerLeft.png"

Player.prototype.draw = function(coords) {
  var canvas = document.getElementById("game-canvas");
  var context = canvas.getContext("2d");
  console.log(this.position);
  console.log(coords);
  context.clearRect(this.position[0], this.position[1], 34, 40);
  context.drawImage(imgRight, coords[0], coords[1], 34, 40);
  this.position = coords;
};

Player.prototype.delete = function() {
  var canvas = document.getElementById("game-canvas");
  var context = canvas.getContext("2d");
  context.clearRect(this.position[0], this.position[1], 34, 40);
};

Player.prototype.drawRight = function(coords) {
  var canvas = document.getElementById("game-canvas");
  var context = canvas.getContext("2d");

  context.clearRect(this.position[0], this.position[1], 34, 40);
  context.drawImage(imgRight, coords[0], coords[1], 34, 40);
  this.position = coords;
};

Player.prototype.drawLeft = function(coords) {
  var canvas = document.getElementById("game-canvas");
  var context = canvas.getContext("2d");

  context.clearRect(this.position[0], this.position[1], 34, 40);
  context.drawImage(imgLeft, coords[0], coords[1], 34, 40);
  this.position = coords;
};

Player.prototype.fallDeath = function(coords) {
  if (this.position[1] > 720) {
    this.falling = false;
    this.lives--;
    this.draw(coords);
  }
};


Player.prototype.checkCollision = function(walls, newCoords) {
  var oldPosition = this.position;
  this.position = newCoords;
    // console.log(walls);
  for (var wall of walls) {
    // console.log(wall);
    if ((this.position[0]+36 >= wall[0] && this.position[0]+36 <= wall [0]+40) && (this.position[1]+40 > wall[1] && this.position[1]+40 < wall[1]+40)) {
      this.position = oldPosition;
      this.falling = false;
      break;
    }
    else if ((this.position[0]+36 >= wall[0] && this.position[0]+36 <= wall[0]+40) && (this.position[1] > wall[1] && this.position[1] < wall[1]+40)) {
      this.position = oldPosition;
      this.falling = false;
      break;
    }
    else if ((this.position[0] >= wall[0] && this.position[0] <= wall[0]+40) && (this.position[1]+40 > wall[1] && this.position[1]+40 < wall[1]+40)) {
      this.position = oldPosition;
      this.falling = false;
      break;
    }
    else if ((this.position[0] >= wall[0] && this.position[0] <= wall[0]+40) &&
      (this.position[1] > wall[1] && this.position[1] < wall[1]+40)) {
      this.position = oldPosition;
      this.falling = false;
      break;
    }
    else {
      this.falling = true;
    }
  }
};

module.exports = Player;


//checkCollision should be used when moving left and right.This might present a problem in setting walkRight and walkLeft to true as well as falling to false.