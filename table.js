var TableModule = (function(args){


  //public

  var publicObject = {};
  publicObject.init = function(args){
    //init action here
    publicObject.render();
  }
  publicObject.tableHeight = 280;
  publicObject.tableWidth = 410;
  publicObject.billiardBalls = [];

  publicObject.render = function(){
    // renders table
    _renderTable();
    _renderBalls();

  }


  //private
  _renderTable = function(){
    $("#container")[0].innerHTML = "<div id='billiard-table'>OH HAI</div>";
  }

  _renderBalls = function(){
    $("#billiard-table")[0].innerHTML = "<div id='billiard-ball'></div>";
  }

  return publicObject;
})()

