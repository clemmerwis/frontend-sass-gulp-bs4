
(function ($) {
    var toggler = $('.navbar-toggler');
    var header = $('.site-header');
    var branding = $('#site-branding');
    if (window.innerWidth >= 992) {
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

   


    //Mobile menu
    $(function() {
        $('nav#menu').mmenu({
            extensions				: [ 'effect-slide-menu', 'shadow-page', 'shadow-panels', "fx-listitems-slide", "fullscreen", 'position-right' ],
            keyboardNavigation 		: true,
            screenReader 			: true,
            counters				: true,
            navbar 	: {
                title	: ''
            },
            navbars	: [
                {
                    position	: 'top',
                    content		: [ 'searchfield' ]
                }, {
                    position	: 'top',
                    content		: [
                        'prev',
                        'title',
                        'close'
                    ]
                }, {
                    position	: 'bottom',
                    content		: [
                        ''
                    ]
                }
            ]
        });
    });

    // $('#menu-primary .dropdown-menu .dropdown-item + .dropdown-menu').each(function() {
    //     $(this).prev().addClass('dropdown-toggle');
    // });

})(jQuery);