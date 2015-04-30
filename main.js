
function BilliardBall(x,y){
  this.radius = 100;
  this.center = {
    x: x,
    y: y
  };
  this.velx = 2;
  this.vely = 3;
}

BilliardBall.prototype.tic = function(){
  this.center.x += this.velx;
  this.center.y += this.vely;
}



  //need function for random velocity


//kicks it off

$( document ).ready(function() {
  //stuff
  theBall = new BilliardBall(300, 300)
  setInterval(function(){
    theBall.tic();
    console.log("x coordinate is" + theBall.center.x);
    console.log("y coordinate is" + theBall.center.y);
  }, 4000);
});