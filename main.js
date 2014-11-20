var BB = BB || {};

BB.MainModule = (function(){

  function init(numBalls){

    //initialize each ball and push onto the table
    for(var i = 1; i <= numBalls; i++){
      var ball = new BB.BilliardBallModule.BilliardBall();
      ball.position = { x: 300 };
      ball.velocity = { x: 4 };
      BB.TableModule.addBall(ball);
    };

  };

  return {
    init : init
  };


}());

$(document).ready(function(){
  BB.MainModule.init(1);
  BB.TableModule.render();

  setInterval(function(){
    BB.TableModule.tic();
  }, 20);   
});