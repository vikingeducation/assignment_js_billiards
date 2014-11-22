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
      //wall collisions
      if ((ball.position['x'] + ball.radius) >= width ){
        ball.velocity['x'] = -1 * Math.abs(ball.velocity['x']);
      } else if ((ball.position['x'] - ball.radius <= 0)){
        ball.velocity['x'] = Math.abs(ball.velocity['x']);
      } else if ((ball.position['y'] + ball.radius) >= height ){
        ball.velocity['y'] = -1 * Math.abs(ball.velocity['y']);
      } else if ((ball.position['y'] - ball.radius <= 0)){
        ball.velocity['y'] = Math.abs(ball.velocity['y']);
      }
      
      //returns boolean
      var ballCollision = function(ball1, ball2){
        //get pythagorean distance
        var dx = (ball1.position['x'] + ball1.radius) - (ball2.position['x'] + ball2.radius);
        var dy = (ball1.position['y'] + ball1.radius) - (ball2.position['y'] + ball2.radius);
        var dist = Math.sqrt(dx * dx + dy * dy);
        console.log(dist);
        collided = (dist < ball1.radius + ball2.radius) ? true : false;
        return collided;
      };


      billiardBalls.forEach(function(otherBall, otherIndex){
      //switch velocities if two balls get within each other's radius
      //safe for counting self because nothing would change
      if (ball.position['x'] > otherBall.position['x'] ) {
        //skip duplicates
      } else if ( ballCollision(ball, otherBall) ) {
          firstVelX = ball.velocity['x'];
          firstVelY = ball.velocity['y'];
          ball.velocity['x'] = otherBall.velocity['x']; 
          ball.velocity['y'] = otherBall.velocity['y']; 
          otherBall.velocity['x'] = firstVelX;
          otherBall.velocity['y'] = firstVelY;
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
