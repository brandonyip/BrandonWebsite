/*Toggle between adding and removing the "responsive" class to topnav when the
user clicks on the icon
*/

/*Wait till document is ready*/
$(document).ready(function(){
  //methods in here
  console.log("ready!");


  /* var colors is an array of colors
  * #cd5c5c is a red
  * #5ccdcc is a blue
  * #ffea00 is a yellow
  * #cc5ccd is a purplepink
  */
  var colors = ["#cd5c5c", "#5ccdcc", "#ffea00", "#5ccd94", "#cc5ccd"]
  var i = 0;
  $("li").each(function(){
    $(this).css('color', colors[i]);
    i++;
  });

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





});
