$(document).ready(function(){
  $(".heart2").hide();
  $('body').css('display', 'none');
  $('body').fadeIn(1000);
  $("#bluerec").hide();
  $(".popup").hide();
  $(".popup2").hide();
  $("#content").on('click',function(){
         $("#content").css({'filter':'blur(2px)'})
         $("#bluerec").fadeIn(500);
         $(".popup2").fadeIn(500);
  });
  $('#dil-button').on('click', function(){
    $(".popup2").fadeOut(500);
    $("#bluerec").fadeOut(500);
    $("#content").css({'filter':'none'})
  });
  $('#signup-button').on('click', function(){
    $(".popup2").fadeOut(300);
    $(".popup").fadeIn(300);
  });





  });
