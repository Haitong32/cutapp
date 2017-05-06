$(document).ready(function(){
  $(".popup").hide();
  $("#sidebar").hide();
  $("#greyrec").hide();
  $('.discover-image2').hide();
  $('.discover-image3').hide();
  $('#click2').hide();
  $('#click3').hide();
  $('.meta2').hide();
  $('.meta3').hide();
  $(".heart-2-1").hide();
  $(".heart-2-2").hide();
  $(".heart-2-3").hide();
  $(".heart-2-4").hide();
  $('body').css('display', 'none');
  $('body').fadeIn(1000);
  $('.heart-1').on('click',function(){
        $('.heart-1').toggle();
        $(".heart-2-1").toggle();
    });
  $('.heart-2-1').on('click',function(){
          $('.heart-1').toggle();
          $(".heart-2-1").toggle();
      });
      $('.heart-2').on('click',function(){
            $('.heart-2').toggle();
            $(".heart-2-2").toggle();
        });
      $('.heart-2-2').on('click',function(){
              $('.heart-2').toggle();
              $(".heart-2-2").toggle();
          });
          $('.heart-3').on('click',function(){
                $('.heart-3').toggle();
                $(".heart-2-3").toggle();
            });
          $('.heart-2-3').on('click',function(){
                  $('.heart-3').toggle();
                  $(".heart-2-3").toggle();
              });

              $('.heart-4').on('click',function(){
                    $('.heart-4').toggle();
                    $(".heart-2-4").toggle();
                });
              $('.heart-2-4').on('click',function(){
                      $('.heart-4').toggle();
                      $(".heart-2-4").toggle();
                  });
        $("#lilength").on('click',function(){
          $(".meta2").fadeToggle(300);
          $('#lilength').css({'color':'blue','border-bottom': '2px solid blue'})
          $('.meta3').fadeOut(100);
          $("#click2").fadeOut(100);
          $("#click3").fadeOut(100);
        });
        $("#long").on('click',function(){
          $(".meta3").fadeToggle(300);
          $("#click2").fadeToggle(100);
          $('.discover-image').fadeOut(500);
          $('.heart').fadeOut(500);
          $('.heart2').fadeOut(300);
          $('.discover-image2').fadeIn(1000);
        });
        $("#armpit").on('click',function(){
          $("#click2").fadeToggle(100);
          $('.discover-image2').fadeOut(500);
          $('.discover-image3').fadeIn(1000);
          $('#long').css({'color':'blue'})
          $('#click3').fadeToggle(100);

        });
        $('#question1').on('click', function(){
             $("#all").css({'filter':'blur(2px)'})
             $(".popup").fadeIn(500);
             $("#greyrec").fadeIn(500);
           });
        $('#close-button').on('click', function(){
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
