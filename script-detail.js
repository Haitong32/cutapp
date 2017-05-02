$(document).ready(function(){
  $('body').css('display', 'none');
  $('body').fadeIn(1000);
  $(".popup").hide();
  $("#greyrec").hide();

  $('#write').on('click', function(){
       $("#all").css({'filter':'blur(2px)'})
       $(".popup").fadeIn(500);
       $("#greyrec").fadeIn(500);
   });
  $('#close-button').on('click', function(){
    $(".popup").fadeOut(500);
    $("#greyrec").fadeOut(500);
    $("#all").css({'filter':'none'})
  });
  });
