$(document).ready(function(){
  $(".heart2").hide();
  $('body').css('display', 'none');
  $('body').fadeIn(1000);
  $('.heart-1').click(function(){
        $(".heart-2-1").toggle();
    });
  $('.heart-2').click(function(){
          $(".heart-2-2").toggle();
    });







  });
