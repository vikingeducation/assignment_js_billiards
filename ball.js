var POOL = POOL || {};

POOL.BallModule = (function(){

  var _radius = 30;

  function Ball(position, vector, table) {
    this.position = { x: position.x, y: position.y };

    this.vector   = {};
    this.vector.x = vector.x;
    this.vector.y = vector.y;

    this.table    = table;

    this.radius   = _radius;
    this.ball     = $('<div class="ball"></div>')
                    .css("width",  (_radius * 2) + "px")
                    .css("height", (_radius * 2) + "px")
                    .css("left",   this.position.x - _radius )
                    .css("top",    this.position.y - _radius );
  }

  Ball.prototype.render = function(){
    this.ball.css("left",    this.position.x - this.radius )
             .css("top",     this.position.y - this.radius );
  };

  Ball.prototype.move = function(){
    this.position.x = this.position.x + this.vector.x;
    this.position.y = this.position.y + this.vector.y;


    // a^2 + b^2 = c^2
    // if sqrt(Math.pow(ball.position.x - this.position.x, 2) + Math.pow(ball.position.y - this.position.y, 2)) < radius
    var that = this;
    this.table.balls.forEach(function(ball){
      if(that !== ball && Math.sqrt(Math.pow(ball.position.x - that.position.x, 2) + Math.pow(ball.position.y - that.position.y, 2)) <= _radius+ball.radius)
        { var starting = {x: that.vector.x, y: that.vector.y};
          that.vector.x = ball.vector.x;
          that.vector.y = ball.vector.y;
          ball.vector.x = starting.x;
          ball.vector.y = starting.y; }
    });

    if(this.position.x + this.radius > this.table.width || this.position.x - this.radius < 0){ this.vector.x *= -1; }
    if(this.position.y + this.radius > this.table.height || this.position.y - this.radius < 0){ this.vector.y *= -1; }
  };

  return { Ball: Ball };

})();