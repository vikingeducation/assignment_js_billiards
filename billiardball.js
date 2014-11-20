// The "Revealing Module Pattern"

var BB = BB || {};

BB.BilliardBallModule = (function(){

  var numBalls = 0;
  
  function BilliardBall(){
    this.radius = 50;
    this.position = {};
    this.velocity = {x: 0};
    numBalls += 1; //keep track of the number created, for fun and profit
  };
  
  BilliardBall.prototype.render = function(){
    $ballDiv = $('<div class = "ball"></div>');
    $ballDiv.css({
      left : (this.position["x"] - this.radius) + "px",
      height: (2*this.radius) + "px",
      width: (2*this.radius) + "px"
    });
    $('#table').append($ballDiv);
  };

  //horizontal only right now
  BilliardBall.prototype.tic = function(){
    this.position['x'] += this.velocity['x'];
  };


  function ballCount(){
    return numBalls;
  };


  return {
    BilliardBall : BilliardBall,
    ballCount : ballCount
  };
}());

