$(document).ready(function(){
  $("#sidebar").hide();
  $('body').css('display', 'none');
  $('body').fadeIn(1000);

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
