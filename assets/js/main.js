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
})(jQuery);