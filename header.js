// document.addEventListener('DOMContentLoaded', function() {
//     window.addEventListener('scroll', sticky);
//     var navbar = document.getElementById("header-navbar");
//     var sticky = navbar.offsetTop

//     function sticky() {
//       navbar.classList.toggle("sticky", window.scrollY > 0)
//     }
// })

var isToggled = false;

function toggleMenu() {
  var navbar = document.getElementById("header-navbar-menu");
  if(navbar.style.display == 'none') {
    navbar.style.display = 'block';
    isToggled = true;
  } else {
    navbar.style.display = 'none';
    isToggled = false;
  }
}

function configureHeader() {
  
  var navbar = document.getElementById("header-navbar-menu");
  if($(document).width() >= 800) {
    navbar.style.display = 'flex';
    isToggled = false;
  }else{
    if(!isToggled) {
      navbar.style.display = 'none';
    }
  }
}

//https://www.freepik.com/free-vector/player-characters-online-game-concept_8131809.htm#page=1&query=gamer&position=32
//https://www.flaticon.com/free-icon/protection-shield-with-a-check-mark_315#
//https://www.freepik.com/free-icon/badge_933771.htm#query=dollar&position=12
//https://www.flaticon.com/free-icon/fast-delivery_98999
//https://www.freepik.com/redirect/aHR0cDovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29uL3VwLWFycm93XzEzMDg2NA