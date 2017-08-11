var Level = function(plan) {
  this.plan = plan;
  this.width = plan[0].length;
  this.height = plan.length;
  var startPoint = [0, 0];
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
   }
  }

  console.log(walls);
}

module.exports = Level;

