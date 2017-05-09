$(document).ready(function(){
  $(".popup").hide();
  $("#allow").hide();
  $("#sidebar").hide();
  $("#greyrec").hide();
  $('#click2').hide();
  $('#click3').hide();
  $('.meta2').hide();
  $('.meta3').hide();
  $('body').css('display', 'none');
  $('body').fadeIn(1000);
  $('body').one('click', function(){
       $(".fade").css({'filter':'blur(2px)'})
       $(".popup").fadeIn(500);
       $("#greyrec").fadeIn(500);
       $("#allow").fadeIn(500);
     });
        $("#licost").on('click',function(){
          $(".meta2").fadeToggle(300);
        });
        $("#okay").on('click',function(){
          $("#click2").fadeToggle(100);
          $('#okay').css({'color':'blue'})
          $(".mapfeed").css({'background-image':"url('img/map2.png')"})
        });
        $("#lidistance").on('click',function(){
          $(".meta3").fadeToggle(300);
        });
        $("#3mi").on('click',function(){
          $("#click3").fadeToggle(100);
          $('#3mi').css({'color':'blue'})
          $(".mapfeed").css({'background-image':"url('img/map3.png')"});
        });
        $('body').one('click', function(){
             $(".fade").css({'filter':'blur(2px)'})
             $(".popup").fadeIn(500);
             $("#greyrec").fadeIn(500);
             $("#allow").fadeIn(500);
           });
        $('#location').on('click', function(){
          $(".popup").fadeOut(500);
          $("#greyrec").fadeOut(500);
          $(".fade").css({'filter':'none'})
        });
        $("#oval").click(function(){
               $("#sidebar").slideToggle()
                 return false;
             });
             $("#logo2").click(function(){
               $("#sidebar").slideToggle()
                return false;
             });
             $("#me").click(function(){
                    $("#sidebar").slideToggle()
                      return false;
                  });

});
