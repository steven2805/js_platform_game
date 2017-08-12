
var Player = function(position) {
  this.position = position;
  this.falling = true;
  this.walkRight = true;
  this.walkLeft = true;
}

Player.prototype.draw = function(coords) {
  var canvas = document.getElementById("game-canvas");
  var context = canvas.getContext("2d");

  context.clearRect(this.position[0], this.position[1], 20, 40);
  context.fillStyle = 'red';
  context.fillRect(coords[0], coords[1], 20, 40);
  context.stroke();
  this.position = coords;
};

module.exports = Player;