$(document).ready(function(){
  $('body').css('display', 'none');
  $('body').fadeIn(1000);
  $("#sidebar").hide();
  $("#star3").hide();
  $("#star1").on('click',function(){
    $('#star1').toggle();
    $('#star3').toggle();
  });
  $("#star3").on('click',function(){
    $('#star1').toggle();
    $('#star3').toggle();
  });
  $("#oval").click(function(){
         $("#sidebar").slideToggle()
           return false;
       });
   $("#logo2").click(function(){
              $("#sidebar").slideToggle()
                return false;
            });

  });
;  
