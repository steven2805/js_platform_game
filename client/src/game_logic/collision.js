var collisionArr = [];
var collision = function(wallArray) {
  wallArray.forEach(function(wall) {
    var y = wall[1];
    // console.log(wallArray);
    var counter = 0;

    while(counter < 41){
      var tempCoords = [];
      tempCoords.push(wall[0] + counter)
      tempCoords.push(y);
      // console.log(wall[1]);

      collisionArr.push(tempCoords);
      counter++;
    }
  });
  return collisionArr;

}

module.exports = collision;