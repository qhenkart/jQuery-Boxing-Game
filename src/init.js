$(document).ready(function(){

  window.dancers = [];
  var allen;
  var fred;
  var finished = false

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    if(window.dancers.indexOf(dancerMakerFunctionName) === -1 ){
      window.dancers.push(dancerMakerFunctionName);
      
      allen = {
        health: 0,
        name: '.allenboxerimage',
        image: 'src/images/allenboxer.gif',
        attackImage: 'src/images/allenattack.gif',
        victoryImage: 'src/images/victoryallen.gif',
        tko: 'src/images/allenhurt.gif',
        attack: 16,
        up: 38,
        left: 37,
        down: 40,
        right: 39
      }

      fred = {
        health: 0,
        name: '.boxerfredimage',
        image: 'src/images/fredboxer.gif',
        attackImage: 'src/images/fredattack.gif',
        victoryImage: 'src/images/victoryfred.gif',
        tko: 'src/images/fredko.gif',
        attack: 32,
        up: 87,
        left: 65,
        down: 83,
        right: 68
      }      


      var dancerMakerFunction = window[dancerMakerFunctionName];

      // make a dancer with a random position

      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );

      $('body').append(dancer.$node);
      if (dancer.constructor === AllenBoxer) {
        $('.allenboxerimage').toggleClass("flipped");
      }
    }
   
  });

  $('body').keydown(function(e){

    //throttling keystrokes
    var now = Date.now();
    var nt = $(this).data("lastime") || now; 
    if( nt > now ) return;
    $(this).data("lastime", now + 200);  
    $("div#output").append("key pressed <br/>");  

    
    move(fred, e.keyCode)
  });


    // player 2 commands  
  $('body').keydown(function(e){
    var now = Date.now();
    var nt = $(this).data("lastime1") || now; 
    if( nt > now ) return;
    $(this).data("lastime1", now + 200);  
    $("div#output").append("key pressed <br/>");  

    move(allen, e.keyCode)
  });



  var attack = function(player){
    var y1 = parseInt($('.boxerfredimage').css('top'));
    var y2 = parseInt($('.allenboxerimage').css('top'));
    var x1 = parseInt($('.boxerfredimage').css('left'));
    var x2 = parseInt($('.allenboxerimage').css('left'));

    if ((Math.abs(x1 - x2) < 175) && (Math.abs(y1 - y2) < 75)){
      console.log("hit")
      if (player === allen.name){

        fred.health++;

        $(".hitsContainer").append("<div class='fredHits'></div>");

        if(fred.health >= 5 && !finished) {
          finished = true;
          victory(fred);
        }
      }else{
        allen.health++;
        $(".hitsContainer2").append("<div class='allenHits'></div>");
        if(allen.health >= 5 && !finished){
          finished=true;
          victory(allen)
        }  
      }
    }
  }

  var victory = function(player){
    debugger;
    if (player.name === allen.name){
      $(allen.name).attr('src', allen.tko);
      $(allen.name).toggleClass('dead');
      // $(allen.name).attr('top', "+=45px")
      $(fred.name).attr('src', fred.victoryImage); 
      setTimeout(function(){alert("Good Game!")}, 2000)

    }else{

      $(fred.name).attr('src', fred.tko);
      $(fred.name).toggleClass("dead");
      // var val = parseInt($(fred.name).css('top')) + 45;
      // $(fred.name).attr('top', val+'px')

      $(allen.name).attr('src', allen.victoryImage); 
      setTimeout(function(){alert("Good Game!")}, 2000)
    }
    $('body').off()

  }

  var move = function(player, direction){
    //spacebar player 1 attack
    if(direction === player.attack){
      $(player.name).attr('src', player.attackImage);

        //set the image back to default after attack
      setTimeout(function(){
        if (!finished){
          $(player.name).attr('src', player.image);
        }
      }, 1000); 
      attack(player.name);

    }


     // player 1 move up (w)
    if(direction === player.up && (parseInt($(player.name).css('top')) - 45 >= 170)) {

      $(player.name).animate({
        'top' : "-=45px" //moves up  });
      });
    }
       //player 1 move left (a)
    if(direction === player.left && (parseInt($(player.name).css('left')) - 45 > 0)){
      if(!$(player.name).hasClass("flipped")){
        $(player.name).toggleClass("flipped") 
      }
      $(player.name).animate({
        'left' : "-=45px" //moves left
      });
      }
    // player 1 moves down (s)
    if(direction === player.down && (parseInt($(player.name).css('top')) + 45 < 380) ){
      $(player.name).animate({
        'top' : "+=45px" //moves down
      });
    }
     //player 1 moves to right (d)
    if(direction === player.right && (parseInt($(player.name).css('left')) + 45 < 1100)){
      if($(player.name).hasClass("flipped")){
        $(player.name).toggleClass("flipped");
      }
      $(player.name).animate({
        'left' : "+=45px" //moves right
      });

    }
  }
});






