
function BilliardBall(x,y){
  this.radius = 100;
  this.center = {
    x: x,
    y: y
  };
  this.velx = -0.2;
  this.vely = 0.5;
}

BilliardBall.prototype.tic = function(){
  this.center.x += this.velx;
  this.center.y += this.vely;
}



  //need function for random velocity


//kicks it off

$( document ).ready(function() {
  //stuff



  theBall = new BilliardBall(400, 250)
  setInterval(function(){
    theBall.tic();
    $leftTime = theBall.center.x
    $vertTime = theBall.center.y
    $( '#billiard-ball' ).css({"margin-left": $leftTime, "margin-top": $vertTime});
    console.log("x coordinate is" + theBall.center.x);
    console.log("y coordinate is" + theBall.center.y);
  }, 40);
});