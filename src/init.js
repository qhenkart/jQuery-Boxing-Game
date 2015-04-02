$(document).ready(function(){

  window.dancers = {};
  window.finished = false

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-boxer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-boxer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the boxer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the boxer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var boxerMakerFunctionName = $(this).data("boxer-maker-function-name");
    var boxerMakerFunction = window[boxerMakerFunctionName];
    var exists = false;
    for(var key in window.dancers){
      if(window.dancers[key].exists === boxerMakerFunctionName){
        exists = true
      }
    }
    if (!exists){
      var boxer = new boxerMakerFunction();

      $('body').append(boxer.$node);
      healthBar(boxer.healthbar);

    }
    
  });

  var healthBar = function(player){
    for(var i = 0; i < 10; i++){
      $(player[0]).append(player[1]); 
    }
  }

  $('body').keydown(function(e){

    //throttling keystrokes
    var now = Date.now();
    var nt = $(this).data("lastime") || now; 
    if( nt > now ) return;
    $(this).data("lastime", now + 200);  
    $("div#output").append("key pressed <br/>");  

    if(e.keyCode > 40 || e.keyCode === 32){
      window.dancers.PlayerOne.move(e.keyCode)

    }
  });


  $('body').keydown(function(e){

    //throttling keystrokes
    var now = Date.now();
    var nt = $(this).data("lastime1") || now; 
    if( nt > now ) return;
    $(this).data("lastime1", now + 200);  
    $("div#output").append("key pressed <br/>");  

    if(e.keyCode <= 40 && e.keyCode != 32){
      window.dancers.PlayerTwo.move(e.keyCode);

    }
  });
});



