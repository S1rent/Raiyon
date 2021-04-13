document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById("scrollTopButton");

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    };
    window.onscroll = function() {
        scrollFunction()
    };
})

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};