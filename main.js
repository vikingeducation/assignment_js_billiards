var POOL = POOL || {};

POOL.MainModule = (function(){

  var _table = new POOL.TableModule.Table();

  function init(quantity){
    _table.render();
    _buildBilliardBalls(quantity);
    _gameLoop();
  }

  function _buildBilliardBalls(quantity){
    for(var i = 0; i < quantity; i++){
      var ball = new POOL.BallModule.Ball({x: Math.floor((Math.random() * (_table.width-60)) + 30), y: Math.floor((Math.random() * (_table.height-60)) + 30)}, {x: Math.floor(5 - (Math.random() * 10)), y: Math.floor(5 - (Math.random() * 10))}, _table);
      _table.balls.push(ball);
      $('.table').append(ball.ball);
    }
  }

  function _movement(){
    _renderBalls();
    _ballMovement();
  }

  function _gameLoop(){
    setInterval(function(){
      _movement();
    }, 10);
  }

  function _ballMovement(){
    _table.balls.forEach(function(ball){
      ball.move();
    });
  }

  function _renderBalls(){
    _table.balls.forEach(function(ball){
      ball.render();
    });
  }

  return { init: init };

})();