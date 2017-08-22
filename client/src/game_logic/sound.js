var Sound = function(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.stop = function(){
    this.sound.pause();
  }
}

Sound.prototype.play = function() {
  this.sound.play();
};

Sound.prototype.stop = function() {
  this.sound.pause();
};

module.exports = Sound;