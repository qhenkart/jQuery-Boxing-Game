var makeGuyDancer = function(top, left, timeBetweenSteps){
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="guy"><img src="src/images/guy.gif"/></span>');
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};
makeGuyDancer.prototype = Object.create(makeDancer.prototype);

makeGuyDancer.prototype.constructor = makeGuyDancer;

makeGuyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    //
    makeDancer.prototype.step.apply(this)
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  };


