var makeBoxer = function(top, left, timeBetweenSteps){
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<span class="boxer"><img class="boxerimage" src="src/images/boxerdude.gif"/></span>');

};
makeBoxer.prototype = Object.create(makeDancer.prototype);

makeBoxer.prototype.constructor = makeBlinkyDancer;


makeBoxer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    //
    makeDancer.prototype.step.apply(this, arguments)
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag
    $('body').keyup(function(e){
      if(e.keyCode == 8){
       // user has pressed backspace
   }
      if(e.keyCode == 32){
       $('.boxerimage').attr('src', "src/images/boxerdudeattack.gif");
       setTimeout(function(){
        $('.boxerimage').attr('src', "src/images/boxerdude.gif");
      }, 1000);
   }
});
};


