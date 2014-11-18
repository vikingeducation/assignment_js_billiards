// The "Revealing Module Pattern"

var BB = BB || {};

var BB.BilliardBallModule = (function(args){

  var init = function(radius, position, velocity){
    // ... do initialization stuff
  };

  var _pos = {};
  var _radius = "100px";
  var _velocity = 0;



  var _setRadius = function(radius){ 
    this._ballRadius = parseInt(radius) + "px";
  };



  var publicFunc1 = function(){
    // ... code, code, call privateFunc, code...
  };
  var publicProp1 = "val1";

  var createBall = function(){

  };

  return {
    init: init,
    publicFunc1: publicFunc1,
    publicProp1: publicProp1,
  };
}());

