$(document).ready(function() {
    // Smooth scroll for internal links
    $('a[href^="#"]').on('click', function(event) {
        var target = this.hash;
        var $target = $(target);
        $('html, body').animate({
            scrollTop: $target.offset().top
        }, 500);
    });
});