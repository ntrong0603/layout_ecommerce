(function ($)
{
    'use strict';
    var elHTML = $("html");
    var elDocument = $(document);
    var elLoading = $(".loading");
    var elScroll = $('.scroll_up');

    $(window).on('load', function ()
    {
        // Loading page
        setTimeout(function ()
        {
            elLoading.delay(700).fadeOut(700);
        }, 800);
        // Loading popup subscribe
        setTimeout(function ()
        {
            // $("#onload-popup").modal('show', {}, 500);
        }, 3000);
    });

    if ($(".js-custome-select").length > 0)
    {
        elDocument.ready(function ()
        {
            $(".js-custome-select").msDropdown();
        })
    }
    /**
     * Set background
     */
    $(".background_bg").each(function ()
    {
        var attr = $(this).attr('data-img-src');
        if (typeof attr !== typeof undefined && attr !== false)
        {
            $(this).css('background-image', 'url(' + attr + ')');
        }
    });
    $(".pr_search_trigger").on('click', function ()
    {
        $(this).toggleClass('show');
        $('.header-form-search').toggleClass('show');
    });
    // More category
    $('.more_slide_open').slideUp();
    $('.more_categories').on('click', function ()
    {
        $(this).toggleClass('show');
        $('.more_slide_open').slideToggle();
    });

    var rclass = true;

    elHTML.on('click', function ()
    {
        if (rclass)
        {
            $('.categories_btn').addClass('collapsed');
            $('.categories_btn,.side_navbar_toggler').attr('aria-expanded', 'false');
            $('#navCatContent,#navbarSidetoggle').removeClass('show');
        }
        rclass = true;
    });

    $(".categories_btn,#navCatContent,#navbarSidetoggle .navbar-nav,.side_navbar_toggler").on('click', function ()
    {
        rclass = false;
    });

    $(window).on('scroll', function ()
    {
        if ($(this).scrollTop() > 150)
        {
            elScroll.fadeIn();
        } else
        {
            elScroll.fadeOut();
        }
    });

    elScroll.on('click', function (e)
    {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    /** Animation js */
    $(function ()
    {

        function ckScrollInit(items, trigger)
        {
            items.each(function ()
            {
                var ckElement = $(this),
                    AnimationClass = ckElement.attr('data-animation'),
                    AnimationDelay = ckElement.attr('data-animation-delay');

                ckElement.css({
                    '-webkit-animation-delay': AnimationDelay,
                    '-moz-animation-delay': AnimationDelay,
                    'animation-delay': AnimationDelay,
                    opacity: 0
                });

                var ckTrigger = (trigger) ? trigger : ckElement;

                ckTrigger.waypoint(function ()
                {
                    ckElement.addClass("animated").css("opacity", "1");
                    ckElement.addClass('animated').addClass(AnimationClass);
                }, {
                    triggerOnce: true,
                    offset: '90%',
                });
            });
        }

        ckScrollInit($('.animation'));
        ckScrollInit($('.staggered-animation'), $('.staggered-animation-wrap'));

    });
    /** End animation js */
    /** Slider */
    function carousel_slider()
    {
        $('.carousel_slider').each(function ()
        {
            var $carousel = $(this);
            $carousel.owlCarousel({
                dots: $carousel.data("dots"),
                loop: $carousel.data("loop"),
                items: $carousel.data("items"),
                margin: $carousel.data("margin"),
                mouseDrag: $carousel.data("mouse-drag"),
                touchDrag: $carousel.data("touch-drag"),
                autoHeight: $carousel.data("autoheight"),
                center: $carousel.data("center"),
                nav: $carousel.data("nav"),
                rewind: $carousel.data("rewind"),
                navText: ['<i class="ion-ios-arrow-left"></i>', '<i class="ion-ios-arrow-right"></i>'],
                autoplay: $carousel.data("autoplay"),
                animateIn: $carousel.data("animate-in"),
                animateOut: $carousel.data("animate-out"),
                autoplayTimeout: $carousel.data("autoplay-timeout"),
                smartSpeed: $carousel.data("smart-speed"),
                responsive: $carousel.data("responsive")
            });
        });
    }

    function slick_slider()
    {
        $('.slick_slider').each(function ()
        {
            var $slick_carousel = $(this);
            $slick_carousel.slick({
                arrows: $slick_carousel.data("arrows"),
                dots: $slick_carousel.data("dots"),
                infinite: $slick_carousel.data("infinite"),
                centerMode: $slick_carousel.data("center-mode"),
                vertical: $slick_carousel.data("vertical"),
                fade: $slick_carousel.data("fade"),
                cssEase: $slick_carousel.data("css-ease"),
                autoplay: $slick_carousel.data("autoplay"),
                verticalSwiping: $slick_carousel.data("vertical-swiping"),
                autoplaySpeed: $slick_carousel.data("autoplay-speed"),
                speed: $slick_carousel.data("speed"),
                pauseOnHover: $slick_carousel.data("pause-on-hover"),
                draggable: $slick_carousel.data("draggable"),
                slidesToShow: $slick_carousel.data("slides-to-show"),
                slidesToScroll: $slick_carousel.data("slides-to-scroll"),
                asNavFor: $slick_carousel.data("as-nav-for"),
                focusOnSelect: $slick_carousel.data("focus-on-select"),
                responsive: $slick_carousel.data("responsive")
            });
        });
    }

    $(document).ready(function ()
    {
        carousel_slider();
        slick_slider();
    });
    /** End slider */
    $('.navbar-toggler').on('click', function ()
    {
        $("header").toggleClass("active");
        if ($('.search-overlay').hasClass('open'))
        {
            $(".search-overlay").removeClass('open');
            $(".search_trigger").removeClass('open');
        }
    });
})(jQuery);