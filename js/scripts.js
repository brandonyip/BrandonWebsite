/*Toggle between adding and removing the "responsive" class to topnav when the
user clicks on the icon
*/

/*Wait till document is ready*/
$(document).ready(function(){
  //methods in here
  console.log("ready!");


 //function: onClick
 //element: hamburger icon
 //description: hamburger icon click expands or retracts the menu
 $(function(){
   $('.navbar-toggle, nav').click(function(){
     $('.navbar-toggle').toggleClass('navbar-on');
     $('nav').fadeToggle();
     $('nav').removeClass('nav-hide');
   });
 });


  //function: onClick
  //element: backToTop button
  //description: brings view back to the top
  //Button fades in and out depending on scroll of page
  $(window).scroll(function(){
    if($(this).scrollTop() >= 50) {
      $('#back-to-top').fadeIn(200);
    }
    else {
      $('#back-to-top').fadeOut(200);
    }
  });

  //When the arrow is clicked
  $('#back-to-top').click(function() {
    $('body, html').animate({
      scrollTop:0
    }, 500);
  });

  /*
  $(".backToTop").on('click', function() {
    var x-coord = 0;
    var y-coord = 0;
    window.scrollTo(x-coord, y-coord);
    $("html, body").animate({scrollTop:$(".container")
    })
  });*/




});
