var Level = function(plan) {
  this.width = plan[0].length;
  this.height = plan.length;
  var startPoint = [0, 0];
  var map = [];

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

  console.log(yArray);
  console.log(xArray);
  console.log(map);
}

module.exports = Level;

