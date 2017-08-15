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
"xxxxxxxxxxxxx              c Kbb", 
"xxxxx         c         bbbbbbbb", 
"xxxD         xxx     x  bbbbbbbb", 
"xxx                    gbbbbbbbb", 
"xxxxxgggggggggggggggggggbbbbbbbb", 
"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"  

]
return level;
}



module.exports = LevelPlanner;

