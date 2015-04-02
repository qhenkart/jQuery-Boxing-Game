var PlayerOne = function(){
  this.topset = 350;
  this.leftset = 0;
  this.attack = 32;
  this.up = 87;
  this.left = 65;
  this.down = 83;
  this.right = 68;
  this.blockKey = 70;
  this.block = false;
  this.healthbar = [".hitsContainer", "<div class='playeronehits'></div>"]

  Boxer.call(this, this.topset, this.leftset);
  window.dancers[this.identity] = this;

};
PlayerOne.prototype = Object.create(Boxer.prototype);

PlayerOne.prototype.constructor = PlayerOne;



var PlayerTwo = function(){
  this.topset = 350;
  this.leftset = 1110;
  this.attack = 16;
  this.up = 38;
  this.left = 37;
  this.down = 40;
  this.right = 39;
  this.blockKey = 18;
  this.block = false;
  this.healthbar = [".hitsContainer2", "<div class='playertwohits'></div>"]
  Boxer.call(this, this.topset, this.leftset);
  window.dancers[this.identity] = this;


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


};

PlayerTwo.prototype = Object.create(Boxer.prototype);

PlayerTwo.prototype.constructor = PlayerTwo;

