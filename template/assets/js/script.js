(function ($) {
    var toggler = $('.navbar-toggler');
    var header = $('.site-header');
    var branding = $('#site-branding');
    if ($(window).width() >= 992) {
        $(window).bind('scroll', function () 
        {
            var promo = $('.promo');
            // after scroll
            if ($(window).scrollTop() > 400) 
            {
                promo.addClass('d-none');
                branding.addClass('lineheight88');
                branding.css("background-color", "rgba(2, 45, 109, 0.95)")
            }
            // before scroll
            else 
            {
                promo.removeClass('d-none');
                branding.removeClass('lineheight88');
                branding.css("background-color", "rgba(2, 45, 109, 1)")
            }
        });        
    }
    else {
        header.removeClass('navbar-sticky');
    }


})(jQuery);