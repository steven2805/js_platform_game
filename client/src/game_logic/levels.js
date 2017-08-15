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

var level2 = [
"                                ", 
"                                ", 
"  P     c                       ", 
" xxxxxxxxxxxx                   ", 
"                                ", 
"                                ", 
"                                ", 
"x x xx     c            gggggg  ", 
"xxxxxx   xxxxxxxxxxxxx  bbbbbb  ", 
"xxxxx                   bb      ", 
"xx xx            xxxxxxxbb  bbbb", 
"xxxxx     c             bb    bb", 
"xxxxxxxxxxxxx              c  bb", 
"xxxxx         c         bbbbbbbb", 
"xxxxx        xxx        bbbbbbbb", 
"xxxxx   c               bbbbbbbb", 
"xxxxxgggggggggggggggggggbbbbbbbb", 
"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"  
]

var level3 = [
"                                ",
"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", 
"x   P     c x                  x", 
"x xxxxxxxxxxx     c           cx", 
"x               wwwwwwww     wwx", 
"xwwwwwwwwwww    w          wwwwx", 
"x          wwcwww  wwwwwwwwwwwwx", 
"x           www    w           x", 
"x c       c        w       c   x", 
"xwww    wwwwwwwwwwww    wwwwwwwx", 
"x                       ww   c x", 
"x   wwwww             wwww  wwwx", 
"x         c                wwwwx", 
"xxxxxxxxxxxxx   xxxxxxxxxxxxxxxx", 
"xxxxx         c         xxxxxxxx", 
"xxxxx        xxx        xxxxxxxx", 
"xxxxx   c           c   xxxxxxxx", 
"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" 
]
return level;
}




module.exports = LevelPlanner;


