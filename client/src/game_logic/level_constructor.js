var Level = function(plan) {
  this.plan = plan;
  this.width = plan[0].length;
  this.height = plan.length;
  var map = [];
  var walls = [];

  var yArray = [];
  var xArray = [];

  for (var y = 0; y < this.height; y++) {
    var yCoord = y * 80;
    yArray.push(yCoord);
  }
  for (var x = 0; x < this.width; x++) {
    var xCoord =  x * 80;
    xArray.push(xCoord);
  }
  for (var yElement of yArray) {
    for (var xElement of xArray) {
      var coord = [xElement, yElement]
      map.push(coord);
    }
  }

  for (var y = 0; y < this.height; y++) {
   for (var x = 0; x < this.width; x++) {
    if (this.plan[y][x] === 'x') {
      var i = (y * 16) + x;
      walls.push(map[i]);
    }
    else if (this.plan[y][x] === 'P') {
      var p = (y * 16) + x;
      var player = map[p];
    }

  }
}



  var canvas = document.getElementById("game-canvas");
  var context = canvas.getContext("2d");

  walls.forEach(function(coords) {   
    context.fillRect(coords[0], coords[1], 80, 80);
    context.stroke();
  });

  context.fillStyle = 'red';
  context.fillRect(player[0], player[1]+40, 20, 40);
  context.stroke();

}

module.exports = Level;

