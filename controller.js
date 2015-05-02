var ControllerModule = (function(args){



  var publicObject = {};
    publicObject.init = function(args){
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
    }
   return publicObject;
})()
