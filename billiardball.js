// The "Revealing Module Pattern"

var BB = BB || {};

var BB.BilliardBallModule = (function(){

  var _numBalls = 0;
  
  function BilliardBall(){
    this.radius = 100;
    this.position = {};
    this.velocity = 0;
    _numBalls += 1; //keep track of the number
  };
  
  BilliardBall.prototype.render = function(){
    
  };
  
  function ballCount(){
    return _numBalls;
  };

  return {
    BilliardBall : BilliardBall,
    ballCount : ballCount;
  };
}());

