var levelsPack = require('./levels');
var Level = require('./level_constructor');
var Player = require('./player');
var Collision = require('./collision');
var Sound = require('./sound')
var score = 0;
var myCoinSound;
var myMusic;
var myTadaSound;
var levelCounter = 0;
var currentPlan = levelsPack[0];
var currentLevel;
var player;
var leftKeyPressed = false;
var rightKeyPressed = false;
var isJumping = false;
var setHalfJump = false;

var selectLevel = function() {
  levelCounter++;
  player.delete();
  if (levelCounter === levelsPack.length - 1){
    gameOver();
    return;
  }
  else {
    var newLevel = levelsPack[levelCounter];
    currentPlan = newLevel;
    gameApp();
  }
}

var gameOver = function() {
  myMusic.stop();
  currentLevel.deleteMap();
  var endPlan = levelsPack[4];
  var endLevel = new Level(endPlan);
  endLevel.setUpMap();
  endLevel.drawMap();
  var restartButton = document.getElementById("restart-button");
  restartButton.style.display = "inline-block";
}

var drawScore = function() {
  var canvas = document.getElementById("game-canvas");
  var context = canvas.getContext("2d");
  context.clearRect(10, 40, 150, -40); 
  context.beginPath();
  context.font = "24px Arial";
  context.fillStyle = "#eee";
  context.fillText("Score: "+score, 10, 30);
  context.closePath();
}

var drawLives = function() {
  var canvas = document.getElementById("game-canvas");
  var context = canvas.getContext("2d");
  context.clearRect(1180, 40, 100, -40); 
  context.beginPath();
  context.font = "24px Arial";
  context.fillStyle = "#eee";
  context.fillText("Lives: "+ player.lives, 1180, 30);
  context.closePath();
}

var keyDownHandler = function(evt) {
  if (evt.keyCode === 39) {
    rightKeyPressed = true;
  }
  if (evt.keyCode === 37) {
    leftKeyPressed = true;
  }
  if (evt.keyCode === 32){
    isJumping = true;
  }
} 

var keyUpHandler = function(evt) {
  if (evt.keyCode === 39) {
    rightKeyPressed = false;
  }
  if (evt.keyCode === 37) {
    leftKeyPressed = false;
  }
  if (evt.keyCode === 32) {
    isJumping = false;
  }
}


var gameApp = function() {
  currentLevel = new Level(currentPlan); 
  currentLevel.deleteMap(); 
  currentLevel.setUpMap();
  player = new Player(currentLevel.playerStart);
  player.draw([currentLevel.playerStart[0], currentLevel.playerStart[1]]);
  var collisions = new Collision(currentLevel.walls);
  var coins = currentLevel.coins;

  // calling music;
  myMusic = new Sound("/sounds/gametheme.mp3");
  myMusic.play();

  //Beginning of interval loop
  var interval = setInterval(function() {
    var oldCoords = player.position;
    var newCoords = oldCoords;
    currentLevel.drawMap();

    drawScore();
    drawLives();
    collisions.collisionDetection(player);
    collisions.halfJump(player);

    if(player.position[1] > 720) {
      myMusic.stop();
      player.myDieSound.play();
      player.position = player.startingPosition;
      player.falling = false;
      setTimeout(function() {
        player.fallDeath([currentLevel.playerStart[0], currentLevel.playerStart[1]])
      myMusic.play();
      }, 4000)
    }
    
      var playerBottom = [player.position[0] + 10, player.position[1] + 40];
      var playerRightSide = [player.position[0] + 30, player.position[1]];
      var playerLeftSide = [player.position[0] - 30, player.position[1]];


      if (player.falling === true) {
        newCoords = [oldCoords[0], oldCoords[1] + 10];
        
        player.draw(newCoords);
        oldCoords = newCoords;
      }

      if(player.falling == true && rightKeyPressed === true || leftKeyPressed === true) {
        collisions.collisionDetection(player);
      }

     document.addEventListener('keydown', keyDownHandler, false)
     document.addEventListener('keyup', keyUpHandler, false)

    // collision with coins
    // need to delete coins from array to work
    for(var coin of coins){
      if(playerLeftSide[0] === coin[0] && playerLeftSide[1] === coin[1]){
        myCoinSound = new Sound("/sounds/coinsound.mp3");
        myCoinSound.play();
        currentLevel.deleteCoin(coin);
        score += 10;
        var index = coins.indexOf(coin);
        coins.splice(index, 1);
        drawScore();
        console.log(score)
        break;
      }
      else if(playerRightSide[0] === coin[0] + 20 && playerRightSide[1] === coin[1]){
        myCoinSound = new Sound("/sounds/coinsound.mp3");
        myCoinSound.play();
        currentLevel.deleteCoin(coin);
        score += 10;
        var index = coins.indexOf(coin);
        coins.splice(index, 1);
        drawScore();
        console.log(score)
        break;
      }
      else if(playerBottom[0] + 10 === coin[0] + 20 && playerBottom[1] === coin[1]){
        myCoinSound = new Sound("/sounds/coinsound.mp3");
        myCoinSound.play();
        currentLevel.deleteCoin(coin);
        score += 10;
        var index = coins.indexOf(coin);
        coins.splice(index, 1);
        drawScore();
        console.log(score)
        break;
      }     
    }


    if (player.position[0] - 30 === currentLevel.key[0] && player.position[1] === currentLevel.key[1]) {
      currentLevel.removeKey(currentLevel.key);
      player.hasKey = true;
      console.log(player.hasKey);
    }
    else if (player.position[0] + 30 === currentLevel.key[0] && player.position[1] === currentLevel.key[1]) {
      currentLevel.removeKey(currentLevel.key);
      player.hasKey = true;
    }

    if (player.position[0] + 30 === currentLevel.doorCenter[0] && player.position[1] === currentLevel.doorCenter[1]) {
      if (player.hasKey) {
        myMusic.stop();
        myTadaSound = new Sound("/sounds/tada.mp3");
        myTadaSound.play();
        clearInterval(interval);
        collisions.emptyArrays();
        selectLevel()
      }
      else if (player.position[0] - 30 === currentLevel.doorCenter[0] && player.position[1] === currentLevel.doorCenter[1]) {
        if (player.hasKey) {
          myMusic.stop();
          myTadaSound = new Sound("/sounds/tada.mp3");
          myTadaSound.play();
          clearInterval(interval);
          player.delete();
          collisions.clearArrays();
          selectLevel(); 
        }
      }
    }

    
    if(isJumping === true && player.falling === false && player.canJump == true){
      collisions.halfJump(player);
      if(player.setHalfJump === false){
        newCoords = [oldCoords[0], oldCoords[1] - 100];
        player.draw(newCoords);
        oldCoords = newCoords;
        isjumping = false;  
      }
      else if(player.setHalfJump === true){
        {
          newCoords = [oldCoords[0], oldCoords[1] - 60];
          player.draw(newCoords);
          oldCoords = newCoords;
          isjumping = false; 
        }
      }  

    }
    playerCanWalk();

    if (player.lives === 0) {
      myMusic.stop();
      clearInterval(interval);
      gameOver();
    }
  }, 40)



  var playerCanWalk = function(){
    var oldCoords = player.position;
    var newCoords = oldCoords;

    if (rightKeyPressed && player.walkRight === true) {
      if(oldCoords[0] + 10 >= 1280){
        newCoords = [oldCoords[0], oldCoords[1]];
        player.draw(newCoords);
        oldCoords = newCoords;
      }else{
        newCoords = [oldCoords[0] + 10, oldCoords[1]];
        player.drawRight(newCoords);
        oldCoords = newCoords;
      }

    }

    if (leftKeyPressed && player.walkLeft === true) {
      if(oldCoords[0] <= 0){
        newCoords = [oldCoords[0], oldCoords[1]];
        player.draw(newCoords);
        oldCoords = newCoords;
      }
      else {
        newCoords = [oldCoords[0] - 10, oldCoords[1]];
        player.drawLeft(newCoords);
        oldCoords = newCoords;
      }

    }
  }
}

window.addEventListener('load', gameApp);