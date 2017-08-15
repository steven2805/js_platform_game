var LevelPlanner = function(){
  this.level = selectedLevel();
};

var selectedLevel = function(){
  result = loadLevelOne();
 // document.getElementById("button1").addEventListener("click", loadLevelOne());
 return result;
}

var loadLevelOne = function(){
level = [
"                                ", 
"                                ", 
"  P     c                       ", 
" xxxxxxxxxxxx                   ", 
"                                ", 
"                                ", 
"                                ", 
"x x x                   gggggg  ", 
"xxxxx   xxxxxxxxxxxxxx  bbbbbb  ", 
"xxxxx                   bb      ", 
"xx xx            xxxxxxxbb  bbbb", 
"xxxxx     c             bb    bb", 
"xxxxxxxxxxxxx              c  bb", 
"xxxxx         c         bbbbbbbb", 
"xxxxx        xxx     x  bbbbbbbb", 
"xxxxx                  gbbbbbbbb", 
"xxxxxgggggggggggggggggggbbbbbbbb", 
"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"  

]
return level;
}



module.exports = LevelPlanner;

