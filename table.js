//Represent a Table object with another Javascript module. 
//It should have properties like its total dimensions and an array of BilliardBalls it contains.
var BB = BB || {};

var BB.TableModule = (function(){

  //defaults to these if init isn't run
  var height = 600;
  var width = 800;
  var balls = [];
  
  function init(height, width, balls){
    this.height = height;
    this.width = width;
    this.balls = balls;
  };
  
  function ballCollection(){
    return this.balls;
  };
  
  function addBall(ball){
    this.balls.push(ball);
  };

  return {
    init : init,
    ballCollection : ballCollection,
    addBall : addBall,
    height: height,
    width : width
  };
}());
