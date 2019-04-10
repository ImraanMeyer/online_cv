    
// Scroll to top div
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(".up").css({"opacity" : "1"})
        } else {
            $(".up").css({"opacity" : "0"})
        }
    });
    $(".html").hover(function(){
        $(this).css("animation", "0"); 
    });
});