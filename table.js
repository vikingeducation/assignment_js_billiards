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
    $("#container").append("<div id='billiard-table'></div>");
    _renderPockets();
  }

  _renderBalls = function(){
    $("#billiard-table").append("<div id='billiard-ball'></div>");
  }

  _renderPockets = function(){
    $("#billiard-table").append("<div class='pocket' id='one'></div><div class='pocket' id='two'></div><div class='pocket' id='three'></div><div class='pocket' id='four'></div><div class='pocket' id='five'></div><div class='pocket' id='six'></div>");
  }

  return publicObject;
})()

