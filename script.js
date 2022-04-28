$(document).ready(function(){
  $(".owns-link").click(function(){
    window.open('Sports.html')
  });

  $(".own-link").click(function(){
    $(".owns-link").unbind('click');
    
  });

  $(".own-links").click(function(){
    $(".owns-link").unbind('click');
  
  });

  $(".own-linkss").click(function(){
    $(".owns-link").unbind('click');
  
  });

});


$(document).ready(function(){
  $(".dropdown").hover(
    function() {
      $('.dropdown-menu', this).stop( true, true ).slideDown("fast");
      $(this).toggleClass('open');
    },
    function() {
      $('.dropdown-menu', this).stop( true, true ).slideUp("fast");
      $(this).toggleClass('open');
    }
  );
});

$(document).ready(function(){
  $(window).scroll(function(){
   if($(this).scrollTop() > 40){
     $('#topbtn').fadeIn();
   }else{
     $('#topbtn').fadeOut();
   }
  });
  $("#topbtn").click(function(){
   $('html ,body').animate({scrollTop : 0},0.1);
 });
});