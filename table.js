var POOL = POOL || {};

POOL.TableModule = (function(){

  var _height = 600;
  var _width = 1000;
  var _balls = [];

  function Table() {
    this.width  = _width;
    this.height = _height;
    this.balls  = _balls;
  }

  Table.prototype.render = function(){
    $table = $("<div class='table'></div>")
              .css("width",  this.width  + "px" )
              .css("height", this.height + "px" );
    $('body').append($table);
    return $table;
  };

  return { Table: Table };

})();