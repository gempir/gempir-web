// smooth anchor scroll
$(document).ready(function(){
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
});

// typing effect
$( document ).ready(function() {
    $(function(){
        $(".typewriter").typed({
            strings: ["^1000 D^250e^250s^250i^250g^250n^250e^250r",
            "^1000 D^250e^250v^250e^250l^250o^250p^250e^250r",
            "^1000 W^250e^250b^250d^250e^250s^250i^250g^250n^250e^250r",
            "^1000 C^250r^250e^250a^250t^250o^250r"],
            typeSpeed: 0
        });
    });
});
