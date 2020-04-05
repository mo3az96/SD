

$(window).on("load", function () {
    $('body,html').scrollTop(0)
    $(".loader").fadeOut(500, function () {
        $('body').css("overflow", "visible");
        $(this).remove();
    });
    //map
    var adresse = "";


    var location = [adresse[0], $("#map").attr("lat"), $("#map").attr("long")];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,

        center: new google.maps.LatLng($("#map").attr("lat"), $("#map").attr("long")),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: false,
        fullscreenControl: false
    });

    var infowindow = new google.maps.InfoWindow();

    var marker;
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(location[1], location[2]),
        map: map,
        icon: 'images/pin.png',

    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infowindow.setContent(location[0]);
            infowindow.open(map, marker);
        }
    })(marker));
});
$(document).ready(function () {
    new WOW().init();
    if ($(window).scrollTop() >= 40) {
        $(".fixed-header").addClass("scroll");
    } else {
        $(".fixed-header").removeClass("scroll");
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 40) {
            $(".fixed-header").addClass("scroll");
            $(".lang").addClass("open");
        } else {
            $(".fixed-header").removeClass("scroll");
            $(".lang").removeClass("open");
        }
    });
    /////////Main Slider/////////
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        dots: true,
        nav: false,
    });
    /////////clients Slider/////////
    $('.clients-slider').owlCarousel({
        items: 6,
        margin: 28,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        autoplay: false,
        dots: true,
        responsive: {
            0: {
                items: 2,

            },
            500: {
                items: 4,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 6
            }
        }
    });
    /////////news Slider/////////
    $('.news-slider').owlCarousel({
        items: 3,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: false,
        nav: false,
        dots: true,
        mouseDrag: false,
        touchDrag: false,

        responsive: {
            0: {
                items: 1,
                loop: true,
                mouseDrag: true,
                touchDrag: true,
            },
            500: {
                items: 2,
                mouseDrag: true,
                touchDrag: true,
            },
            1000: {
                items: 3,
            },
        }
    });
    if ($(window).width() <= 1199) {
        $(".container").removeClass("cont")
    }
    if ($(window).width() <= 991) {
        $('.menubtn').click(function () {
            $(this).toggleClass('open');
            $("._2nd-sec").slideToggle('300');
            $(".lang").toggle();
            $("body").toggleClass("overflow");
        });
        $(".dropmenu").wrap("<div class='drop-xs' />");
        $(".mo-dropdown>.nav-anchor").click(function () {
            $('.drop-xs').slideToggle('300');
            $(this).toggleClass('open');
        })
        $(".project").wrapAll("<div class='projects-slider owl-carousel' />");

        $('.projects-slider').owlCarousel({
            items: 1,
            margin: 30,
            rtl: document.dir == 'rtl' ? true : false,
            dots: true,
            nav: false,
        });
    }
    $(".inputfile").change(function () {
        var file = $('.inputfile')[0].files[0]
        if (file) {
            $(".input-file").val(file.name)
            $(".input-file").parent().find(".floating-label").addClass('label-active');
        }
    });
});


$(function () {
    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, else we gonna set it if we can.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });

});