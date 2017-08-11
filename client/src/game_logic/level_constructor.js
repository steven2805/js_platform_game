var Level = function(plan) {
  this.width = plan[0].length;
  this.height = plan.length;
  this.startPoint = [0, 0];
  var map = [[0, 0]];

  var yArray = [];
  var xArray = [];

  for (var y = 0; y < this.height; y++) {
    var yCoord = this.startPoint[1] += 80;
    yArray.push(yCoord);
    for (var x = 0; x < this.height; x++) {
      var xCoord = this.startPoint[1] += 80;
      xArray.push(xCoord);
    }
  }



  for (var yElement of yArray) {
    for (var xElement of xArray) {
      var coord = [xElement, yElement]
      map.push(coord);
    }
  }

  // for (var y = 0; y < this.height; y++) {
  //   this.startPoint[1] += 80;
  //   for (var x = 0; x < this.width; x++) {
  //     this.startPoint[0] += 80;
  //     this.map.push(this.startPoint);
  //   }
  //   this.map.push(this.startPoint);
  //   this.startPoint[0] = 0; 
  // }

   console.log(map);
}

module.exports = Level;

