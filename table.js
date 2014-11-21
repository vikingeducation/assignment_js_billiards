//Represent a Table object with another Javascript module. 
//It should have properties like its total dimensions and an array of BilliardBalls it contains.
var BB = BB || {};

BB.TableModule = (function(){

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
    return balls;
  };
  
  function addBall(ball){
    balls.push(ball);
  };

  function render(){
    $('#table').css({
      'width' : this.width + 'px',
      'height' : this.height + 'px'
    });

    $('#table').empty(); 
    balls.forEach(function(ball, index){
      ball.render();
    });
  }
  
  
  
 function _checkCollisions(){
    
     balls.forEach(function(ball, index, billiardBalls){
      //wall collisions, horizontal only
      if ((ball.position['x'] + ball.radius) >= width ){
        ball.velocity['x'] *= -1;
      } else if ((ball.position['x'] - ball.radius <= 0)){
        ball.velocity['x'] *= -1;
      }
      
      //ball collisions, horizontal only
      billiardBalls.forEach(function(otherBall, otherIndex){
      //switch velocities if two balls get within each other's radius
      //safe for counting self because nothing would change
			 if (ball.position['x'] < otherBall.position['x'] + otherBall.radius &&
   ball.position['x'] + ball.radius > otherBall.position['x']) {
          firstVel = ball.velocity['x'];
          ball.velocity['x'] = otherBall.velocity['x']; 
          otherBall.velocity['x'] = firstVel;
        }
      });
      
    });
    
  }
    

  function tic(){
    balls.forEach(function(ball){
      ball.tic();
    });
    _checkCollisions();
    this.render();
  }

  return {
    init : init,
    ballCollection : ballCollection,
    addBall : addBall,
    height: height,
    width : width,
    render : render,
    tic : tic
  };
}());
