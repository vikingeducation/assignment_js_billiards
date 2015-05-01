
function BilliardBall(x,y){

  //not currently using radius, need to apply it
  //need random color generation
  this.radius = 10;
  this.center = {
    x: x,
    y: y
  };

  function forwardOrBack(){
    if (Math.random() > 0.5){
      return 1;
    } else {
      return -1;
    }
  }

  var xDir = forwardOrBack();
  var yDir = forwardOrBack();

  this.velx = Math.floor((Math.random() * 10) + 1) * xDir;
  this.vely = Math.floor((Math.random() * 10) + 1) * yDir;
}

  //apply velocity to billiard ball
BilliardBall.prototype.tic = function(){
  this.center.x += this.velx;
  this.center.y += this.vely;
}

//kicks it off

$( document ).ready(function() {
  //stuff
  TableModule.init();

  theBall = new BilliardBall(400, 250);

  setInterval(function(){
    theBall.tic();
    $leftTime = theBall.center.x
    $vertTime = theBall.center.y
    $size = theBall.radius * 2

    $( '#billiard-ball' ).css({"margin-left": $leftTime, "margin-top": $vertTime, "height": $size, "width": $size});

    // console.log("x coordinate is" + theBall.center.x);
    // console.log("y coordinate is" + theBall.center.y);
  }, 80);
});