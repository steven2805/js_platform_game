var collisionArr = [];

var collision = function(wallArray) {
  wallArray.forEach(function(wall) {
    var y = wall[1];
    var counter = 0;

    while(counter < 41){
      var tempCoords = [];
      tempCoords.push(wall[0] + counter)
      tempCoords.push(y);
      collisionArr.push(tempCoords);
      counter++;
    }
  });
  return collisionArr;

}


// var verticalCollision = function(wallArray){
//   wallArray.forEach(function(wall){
//     var x = wall[0];
//     var counter = 0;

//     while(counter < 41){
//       var tempcords = [];
//       tempCoords.push(wall[1] + counter)
//       tempCoords.push(x);
//       wallCollisionArray.push(tempCoords);
//       counter++;


//     }
//   })
//   return wallCollisionArray;
// }

module.exports = collision;