// Creates and returns a new Boxer object that can step
var Boxer = function(top, left){
  // use jQuery to create an HTML <span> tag
  this.health = 10;
  this.setPosition(top, left);
};



Boxer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left,
    position: 'absolute'
  };

  this.$node.css(styleSettings);
};


Boxer.prototype.move = function(direction){
  //spacebar this 1 attack
  if(direction === this.attack){
    $(this.name).attr('src', this.attackImage);

      //set the image back to default after attack
    var context = this;
    setTimeout(function(){
      if (!finished){
        $(context.name).attr('src', context.image);
      }
    }, 1000); 
    context.fight();

  }


   // this 1 move up (w)
  if(direction === this.up && (parseInt($(this.name).css('top')) - 45 >= 170)) {

    $(this.name).animate({
      'top' : "-=45px" //moves up  });
    });
  }
     //this 1 move left (a)
  if(direction === this.left && (parseInt($(this.name).css('left')) - 45 > 0)){
    if(!$(this.name).hasClass("flipped")){
      $(this.name).toggleClass("flipped") 
    }
    $(this.name).animate({
      'left' : "-=45px" //moves left
    });
  }
  // this 1 moves down (s)
  if(direction === this.down && (parseInt($(this.name).css('top')) + 45 < 380) ){
    $(this.name).animate({
      'top' : "+=45px" //moves down
    });
  }
   //this 1 moves to right (d)
  if(direction === this.right && (parseInt($(this.name).css('left')) + 45 < 1100)){
    if($(this.name).hasClass("flipped")){
      $(this.name).toggleClass("flipped");
    }
    $(this.name).animate({
      'left' : "+=45px" //moves right
    });

  }
  if(direction === this.blockKey){

    this.block = true
    var context = this;
    setTimeout(function(){context.block = false}, 1000);
  }
}


Boxer.prototype.fight = function(){
  var playerOne = window.dancers.PlayerOne;
  var playerTwo = window.dancers.PlayerTwo;
  var y1 = parseInt($(playerOne.name).css('top'));
  var y2 = parseInt($(playerTwo.name).css('top'));
  var x1 = parseInt($(playerOne.name).css('left'));
  var x2 = parseInt($(playerTwo.name).css('left'));
  if ((Math.abs(x1 - x2) < 175) && (Math.abs(y1 - y2) < 75)){
    if (this.identity === "PlayerTwo"){
      if (!playerOne.block){
        playerOne.health--;
        $(playerOne.healthbar[0] + " div:last-child").remove();
      }
      if(playerOne.health <= 0 && !finished) {
        this.victory();
      }
    }else{
      if(!playerTwo.block){
        playerTwo.health--;
        $(playerTwo.healthbar[0] + " div:last-child").remove();
      }
     
      if(playerTwo.health <= 0 && !finished){
        this.victory();
      }  
    }
  }
  
}

Boxer.prototype.victory = function(){
  var playerOne = window.dancers.PlayerOne;
  var playerTwo = window.dancers.PlayerTwo;
  if(this.constructor === PlayerOne){
    $(playerTwo.name).attr('src', playerTwo.tko);
    finished = true;
    $(playerTwo.name).toggleClass('dead');
    $(this.name).attr('src', this.victoryImage); 
    setTimeout(function(){alert("Good Game!")}, 2000)

  }else{

    $(playerOne.name).attr('src', playerOne.tko);
    finished = true;
    $(playerOne.name).toggleClass("dead");

    $(this.name).attr('src', this.victoryImage); 
    setTimeout(function(){alert("Good Game!")}, 2000)
  }
  $('body').off()

}
