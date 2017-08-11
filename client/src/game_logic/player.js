


var Player = function(startingCoords) {
  this.startingCoords = startingCoords;
}

Player.prototype.draw = function(coords) {
  var canvas = document.getElementById("game-canvas");
  var context = canvas.getContext("2d");
  context.fillStyle = 'red';
  context.fillRect(coords[0], coords[1], 20, 40);
  context.stroke();
};

module.exports = Player;