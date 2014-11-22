var BB = BB || {};

BB.MainModule = (function(){

  function init(numBalls){

    //initialize each ball and push onto the table
    for(var i = 1; i <= numBalls; i++){
      var ball = new BB.BilliardBallModule.BilliardBall();
 

      ball.position = { y: Math.floor(Math.random() * 450) + 50, x : 800 - (i * 125) }; //spread out billiardBalls vertically
      ball.velocity = { x: Math.floor(Math.random()* 7) - 5, y: Math.floor(Math.random()* 7) - 5}; //vary speeds
      BB.TableModule.addBall(ball);
    };

  };

  return {
    init : init
  };


}());

$(document).ready(function(){
  BB.MainModule.init(6);
  BB.TableModule.render();

  setInterval(function(){
    BB.TableModule.tic();
  }, 20);   
});
