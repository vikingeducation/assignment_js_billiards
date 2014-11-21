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
      var ball = new POOL.BallModule.Ball({x: 500, y: 500}, {x: 3, y: 3}, _table);
      _table.balls.push(ball);
      $('.table').append(ball.ball);
    }
  }

  function _movement(){
    _ballMovement();
    _renderBalls();
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