// The "Revealing Module Pattern"

var BB = BB || {};

BB.BilliardBallModule = (function(){

  var numBalls = 0;
  
  // integers representing a number of px
  function BilliardBall(){
    this.radius = 50;
    this.position = {};
    this.velocity = { x: 0,
                      y: 0 };
    this.rgbColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    numBalls += 1; //keep track of the number created, for fun and profit
  };
  
  //renders an individual ball on the table at an individual moment
  BilliardBall.prototype.render = function(){
    $ballDiv = $('<div class = "ball"></div>');
    $ballDiv.css({
      bottom: (this.position["y"] - this.radius) + "px",
      left : (this.position["x"] - this.radius) + "px",
      height: (2*this.radius) + "px",
      width: (2*this.radius) + "px",
      "background-color" : this.rgbColor
    });
    $('#table').append($ballDiv);
  };

  //iterates ball position to the next moment
  BilliardBall.prototype.tic = function(){
    this.position['x'] += this.velocity['x'];
    this.position['y'] += this.velocity['y'];
  };


  function ballCount(){
    return numBalls;
  };


  return {
    BilliardBall : BilliardBall,
    ballCount : ballCount
  };
}());

