$(document).ready(function(){
  $('body').css('display', 'none');
  $('body').fadeIn(1000);
  $("#sidebar").hide();
  $("#heart2").hide();
  $("#ratestars2").hide();
  $("#star3").hide();
  $(".popup").hide();
  $(".popup2").hide();
  $("#greyrec").hide();
  $("#bluerec").hide();
  $("#heart").one('click', function(){
    $("#all").css({'filter':'blur(2px)'})
    $(".popup2").fadeIn(500);
    $("#bluerec").fadeIn(500);
  });
  $("#heart").on('click', function(){
    $("#heart2").fadeToggle(500);
  });
  $("#heart2").on('click', function(){
    $("#heart").fadeIn(500);
    $("#heart2").fadeOut(500);
  });

  $("#maybe-button").on('click', function(){
    $(".popup2").fadeOut(500);
    $("#bluerec").fadeOut(500);
    $("#all").css({'filter':'none'})
  });
  $('#close-button2').on('click', function(){
    $(".popup2").fadeOut(500);
    $("#bluerec").fadeOut(500);
    $("#all").css({'filter':'none'})
  });
  $("#star1").on('click',function(){
    $('#star1').toggle();
    $('#star3').toggle();
  });
  $("#star3").on('click',function(){
    $('#star1').toggle();
    $('#star3').toggle();
  });
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
  $("#done").on('click', function(){
    $(".popup").fadeOut(500);
    $("#greyrec").fadeOut(500);
    $("#all").css({'filter':'none'})
  });
  // $("#ratestars").on('click', function(){
  //   $("#ratestars2").fadeIn(500);
  // });
  $("#oval").click(function(){
         $("#sidebar").slideToggle()
           return false;
       });
   $("#logo2").click(function(){
              $("#sidebar").slideToggle()
                return false;
            });
  });
