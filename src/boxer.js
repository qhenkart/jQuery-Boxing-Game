var FredBoxer = function(top, left, timeBetweenSteps){
  this.$node = $('<img class="boxerfredimage" src="src/images/fredboxer.gif"/>');
  // debugger;
  top = 350;
  left = 0;
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};
FredBoxer.prototype = Object.create(Dancer.prototype);

FredBoxer.prototype.constructor = FredBoxer;


FredBoxer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.apply(this, arguments)
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag


};


var AllenBoxer = function(top, left, timeBetweenSteps){
  this.$node = $('<img class="allenboxerimage" src="src/images/allenboxer.gif"/>');
  // debugger;
  top = 350;
  left = 1110;
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};
AllenBoxer.prototype = Object.create(Dancer.prototype);

AllenBoxer.prototype.constructor = AllenBoxer;


AllenBoxer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.apply(this, arguments)
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag


};

