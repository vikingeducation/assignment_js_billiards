// The "Revealing Module Pattern"

var BB = BB || {};

var BB.BilliardBallModule = (function(){

  var _numBalls = 0;
  
  function BilliardBall(radius, position, velocity){
    
    _numBalls += 1;
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

