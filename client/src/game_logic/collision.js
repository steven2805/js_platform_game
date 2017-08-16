var Collision = function(wallArray){
  this.ground = collision(wallArray);
  this.underSides = underSide(wallArray);
  this.rightWalls = rightWallCollision(wallArray);
  this.leftWalls = leftWallCollision(wallArray);
}

var groundCollisionArray = [];
var underSides = [];
var rightWalls = [];
var leftWalls = [];

Collision.prototype.emptyArrays = function() {
  groundCollisionArray = [];
  underSides = [];
  rightWalls = [];
  leftWalls = [];
};


var collision = function(wallArray) {
  wallArray.forEach(function(wall) {
    var y = wall[1];
    var counter = 0;
    while(counter < 41){
      var tempCoords = [];
      tempCoords.push(wall[0] + counter)
      tempCoords.push(y);
      groundCollisionArray.push(tempCoords);
      counter += 2;
    }
  });
  return groundCollisionArray;
}

var underSide = function (wallArray){
  wallArray.forEach(function(wall){
    var y = wall[1];
    var counter = 0;
    while(counter < 41){
      var tempCoords = [];
      tempCoords.push(wall[0] + counter)
      tempCoords.push(y + 40);
      underSides.push(tempCoords)
      counter += 2;
    }
  });
  return underSides;
}

var rightWallCollision = function(wallArray){
  wallArray.forEach(function(wall){
    var x = wall[0];
    var counter = 0;
    while(counter < 41){
      var tempCoords = [];
      tempCoords.push(x);
      tempCoords.push(wall[1] + counter);
      rightWalls.push(tempCoords);
      counter += 2;
    }
  })
  return rightWalls;
}


var leftWallCollision = function(wallArray){
  wallArray.forEach(function(wall){
    var x = wall[0];
    var counter = 0;
    while(counter < 41){
      var tempholding =[];
      tempholding.push(x + 40);
      tempholding.push(wall[1] + counter);
      leftWalls.push(tempholding);
      counter += 2;
    }
  })

 return leftWalls;

}


Collision.prototype.collisionDetection = function(player){
  for(var number of numbers){
    for(var ground of this.ground){ 
      if(player.position[0] + number === ground[0] && player.position[1] + 40 === ground[1]){
        player.falling = false;
        break;
      }
      else{
        player.falling = true;
      }
    }
  }

  for(var number of numbers){
    for(var underside of this.underSides){
      if(player.position[0] + number === underside[0] && player.position[1] === underside[1]){
        console.log("detection")
        player.canJump = false;
        break;
      }
      else{
        player.canJump = true;
      }
    }
  }


  for(var number of heightnumbers){
    for(var wall of this.rightWalls){ 
      if(player.position[0] + 40 === wall[0] && player.position[1] + number === wall[1]){
        player.walkRight = false;
        console.log("touch wall")
        break;
      }
      else{
        player.walkRight = true;
      }
    }
  }
  for(number of heightnumbers){
    for(var wall of this.leftWalls){
      if(player.position[0] === wall[0] && player.position[1] + number === wall[1]){
        player.walkLeft = false;
        break;
      }
      else
      {
        player.walkLeft = true;
      }
    }
  }
}

Collision.prototype.halfJump = function(player){
  for(var number of numbers){
    for(var underside of this.underSides){
      if(player.position[0] + number === underside[0] && player.position[1] - 40 === underside[1]){
        player.setHalfJump = true;
        break;
      }
      else
      {
        player.setHalfJump = false;
      }
    }
  }
}

var numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var heightnumbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34];

module.exports = Collision;