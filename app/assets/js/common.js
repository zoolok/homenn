$(document).ready(function () {
    /* --------------------------------------------------------
MFP
----------------------------------------------------------- */
    $('[id^="youtube-video"]').magnificPopup({
        type: 'iframe'
    });
    /* --------------------------------------------------------
     INPUTS
    ----------------------------------------------------------- */
    $('.input-group input, .input-group label').on('keyup focus blur', function() {
        if($(this).val().length > 0){
            $(this).next().addClass('filled');
            $(this).css("border-bottom","3px solid #ef2203");
        }
        else{
            $(this).next().removeClass('filled');
            $(this).css("border-bottom","1px solid #000");
        }
    });
    /* --------------------------------------------------------
 SCROLL DOWN
----------------------------------------------------------- */
    $(function () {
        "use strict";
        $(".down").on('click', function (event) {
            event.preventDefault();
            var hash = '#program';

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000);
        });
    });

    /* --------------------------------------------------------
     INDEX  SLIDERS
----------------------------------------------------------- */
    $(function () {
        "use strict";
        if ($(".main-slider").length > 0) {

            $('.main-slider').owlCarousel({
                items: 4,
                nav: true,
                navText: ["", ""],
                dots: false,
                loop: true,
                margin:24,
                center: false,
                autoplay: true,
                responsive:{
                    0:{
                        items:2,

                    },
                    768:{
                        items:4

                    },
                    1920:{
                        items:4
                    }
                }
            });
        }
    });
    $(function () {
        "use strict";
        if ($(".rew-slider").length > 0) {

            $('.rew-slider').owlCarousel({
                items: 1,
                nav: true,
                navText: ["", ""],
                dots: false,
                loop: true,
                center: true,
                autoplay:false
            });
        }
    });
    $(function () {
        "use strict";
        if ($(".client-slider").length > 0) {

            $('.client-slider').owlCarousel({
                items: 1,
                nav: true,
                navText: ["", ""],
                dots: false,
                loop: true,
                center: true,
                autoplay:false
            });
        }
    });
    $(function () {
        "use strict";
        if ($(".corp-slider-wrap").length > 0) {
            var owl = $('.corp-slider-wrap');
            owl.owlCarousel({
                items: 1,
                nav: true,
                navText: ["", ""],
                dots: true,
                loop: true,
                center: true,
                autoplay:0,
                onInitialized: allslides,
                onDragged:checkcur,
                onTranslated:checkcur
            });
        }
    });
    function allslides(event) {
        var items  = event.item.count;
        if (items < 10){
            $('.corp-slider-wrap .owl-next').html('0' + items);
        }else{
            $('.corp-slider-wrap .owl-next').html(items);
        }
        $('.corp-slider-wrap .owl-prev').html('01');

        $(".owl-dots").insertAfter($(".corp-slider-wrap .owl-prev"));

        var dotsw = $(".owl-dots").width();

        $('.owl-dot').css('width',dotsw/items + 'px')
    }
    function checkcur(event) {
        var item = event.page.index + 1;
        if (item < 10){
            $('.corp-slider-wrap .owl-prev').html('0' + item);
        }else{
            $('.corp-slider-wrap .owl-prev').html(item);
        }

    }

    /* --------------------------------------------------------
SERVICE PAGE LIST ITEMS
----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ( $( ".events-wrap" ).length > 0 ) {

            var items =$('.event-item'),
                per = 6,
                i = 1,
                total = 0;

            $('.more-events').on('click', function(){
                total = per * (i++);
                items.slice(0, total).fadeIn(1000);
                console.log(items.length);
                $(this)[total >= items.length ? 'hide' : 'show']();
            }).click();

        }
    });
    /* --------------------------------------------------------
  FAQ
----------------------------------------------------------- */
    $('.question').click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass('down-faq');
    }) ;
    /* --------------------------------------------------------
MOBILE MENU
----------------------------------------------------------- */
    $('.mob-button').click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass('down-menu');
    });
    /* --------------------------------------------------------
PHONE MASK
----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ($("#phone").length > 0) {
            $("#phone").mask("+7(999) 999-99-99");
        }
    })
});
