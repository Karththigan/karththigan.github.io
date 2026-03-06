$(document).ready(function() {
    // Smooth scroll for internal links
    $('a[href^="#"]').on('click', function(event) {
        var href = $(this).attr('href');
        if (!href || href === '#') {
            return;
        }
        var target = this.hash;
        if (!target) {
            return;
        }
        var $target = $(target);
        if ($target.length === 0) {
            return;
        }
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $target.offset().top
        }, 500);
    });

    // Show navbar on scroll
    $(window).on('scroll', function() {
        var nav = $('#navbar');
        var mainSection = $('#index').offset().top + $('#index').height();
        
        if ($(window).scrollTop() >= mainSection - 20) {
            nav.fadeIn();
        } else {
            nav.fadeOut();
        }
    });

    // Show the first panel by default
    showPanel(0);
});

// JavaScript for tab functionality
function showPanel(index) {
    var tabs = document.querySelectorAll('.tab-panel');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });
    tabs[index].classList.add('active');
}
