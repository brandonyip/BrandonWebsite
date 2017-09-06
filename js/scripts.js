/*Toggle between adding and removing the "responsive" class to topnav when the
user clicks on the icon
*/

/*Wait till document is ready*/
$(document).ready(function(){
  //methods in here
  console.log("ready!");

  $(".icon").on('click', function () {
    var nav = document.getElementById("topnav");
    if(nav.className === "navigationBar") {
      nav.className += " responsive";
    } else {
      nav.className = "navigationBar";
    }
  });
});
