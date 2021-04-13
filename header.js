document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', sticky);
    var navbar = document.getElementById("header-navbar");
    var sticky = navbar.offsetTop

    function sticky() {
      navbar.classList.toggle("sticky", window.scrollY > 0)
    }
})

//https://www.freepik.com/free-vector/player-characters-online-game-concept_8131809.htm#page=1&query=gamer&position=32