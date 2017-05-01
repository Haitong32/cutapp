$(document).ready(function(){
        //Enable swiping...
        $(".gallery").swipe({
          //Generic swipe handler for all directions
          swipe:function(event, left, distance, duration, fingerCount, fingerData) {
          //Default is 75px, set to 0 for demo so any distance triggers swipe
           threshold:0
        }
      });

});
