(function ($) {
    "use strict";
    if ($(".search-box-outer").length) {
        $(".search-box-outer").on("click", function () {
            $("body").addClass("search-active");
        });
        $(".close-search").on("click", function () {
            $("body").removeClass("search-active");
        });
    }
    $(document).on("ready", function () {
        $("[data-background]").each(function () {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        });
    });
    new WOW().init();
    $(".hero-slider").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: -1,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 1500,
        items: 1,
        navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
    });
    $(".hero-slider").on("change.owl.carousel", function (event) {
        new WOW().init();
    });
    $(".partner-slider").owlCarousel({ loop: true, margin: 50, nav: false, dots: false, autoplay: true, responsive: { 0: { items: 2 }, 600: { items: 3 }, 1000: { items: 6 } } });
    $(".testimonial-slider").owlCarousel({ loop: true, margin: 30, nav: false, dots: true, autoplay: true, responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } } });
    $(".case-slider").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ["<i class='far fa-long-arrow-left'></i>", "<i class='far fa-long-arrow-right'></i>"],
        dots: false,
        autoplay: true,
        responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } },
    });
    $(window).on("load", function () {
        $(".preloader").fadeOut("slow");
    });


    // ***************** assets/js/counter-up.js ****************
    // $(".counter").countTo();

    // ******************* assets/js/jquery.appear.min.js ******************
    // $(".counter-box").appear(
    //     function () {
    //         $(".counter").countTo();
    //     },
    //     { accY: -100 }
    // );

    // *********** query.magnific-popup.min.js *********
    // $(".popup-gallery").magnificPopup({ delegate: ".popup-img", type: "image", gallery: { enabled: true } });
    // $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({ type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: false, fixedContentPos: false });


    $(window).scroll(function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $("#scroll-top").fadeIn("slow");
        } else {
            $("#scroll-top").fadeOut("slow");
        }
    });
    $("#scroll-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1500);
        return false;
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $(".navbar").addClass("fixed-top");
        } else {
            $(".navbar").removeClass("fixed-top");
        }
    });
    if ($("#countdown").length) {
        $("#countdown").countdown("2030/01/30", function (event) {
            $(this).html(
                event.strftime(
                    "" +
                        '<div class="row">' +
                        '<div class="col countdown-single">' +
                        '<h2 class="mb-0">%-D</h2>' +
                        '<h5 class="mb-0">Day%!d</h5>' +
                        "</div>" +
                        '<div class="col countdown-single">' +
                        '<h2 class="mb-0">%H</h2>' +
                        '<h5 class="mb-0">Hours</h5>' +
                        "</div>" +
                        '<div class="col countdown-single">' +
                        '<h2 class="mb-0">%M</h2>' +
                        '<h5 class="mb-0">Minutes</h5>' +
                        "</div>" +
                        '<div class="col countdown-single">' +
                        '<h2 class="mb-0">%S</h2>' +
                        '<h5 class="mb-0">Seconds</h5>' +
                        "</div>" +
                        "</div>"
                )
            );
        });
    }
    let date = new Date().getFullYear();
    $("#date").html(date);
    $(window).on("load", function () {
        if ($(".filter-box").children().length > 0) {
            $(".filter-box").isotope({ itemSelector: ".filter-item", masonry: { columnWidth: 1 } });
            $(".filter-btns").on("click", "li", function () {
                var filterValue = $(this).attr("data-filter");
                $(".filter-box").isotope({ filter: filterValue });
            });
            $(".filter-btns li").each(function () {
                $(this).on("click", function () {
                    $(this).siblings("li.active").removeClass("active");
                    $(this).addClass("active");
                });
            });
        }
    });

    // *************** assets/js/jquery.nice-select.min.js *************
    // $(".select").niceSelect();

})(jQuery);

$(".custom1").owlCarousel({
    items: 1,
    stagePadding: 0,
    dots: false,
    autoplay: true,
    nav: true,
    smartSpeed: 4500,
});

$(".singapore-tour-slider").owlCarousel({
    items: 1,
    stagePadding: 0,
    dots: false,
    autoplay: true,
    nav: false,
    smartSpeed: 4500,
    loop: true,
});

$(".tourDetailSlider").owlCarousel({
    items: 1,
    stagePadding: 0,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    nav: false,
    smartSpeed: 4500,
    // loop: true,
});


// Around The Area
$("#imageSlider").owlCarousel({
    items: 1,
    stagePadding: 0,
    dots: false,
    autoplay: true,
    nav: true,
    smartSpeed: 4500,
    loop: true,
});

$(".sub-dropdown > .dropdown-item").on("click", function () {
    $(this).parent().find(".sub-dropdown-menu").toggle();
});


$(window).scroll(function () {
    if($('.about-area').length > 0){
      var topDivHeight = $(".header").height();
      var viewPortSize = $(window).height();
      var triggerAt = $('.about-area').offset().top + 570;
      var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;
      if ($(window).scrollTop() >= triggerHeight) {
          $('.animation__plane').addClass('animate');
          $('.animation__plane--shadow').addClass('animate');
          $(this).off('scroll');
      }
    }
});


$(window).on('scroll', function () {
    var section = $('#changiTour');
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var sectionOffset = section.offset().top;
    var sectionHeight = section.outerHeight();

    // Check if the section is in the viewport
    if (scrollTop + windowHeight > sectionOffset && scrollTop < sectionOffset + sectionHeight) {
        // Add the class when in the viewport
        $('.animation__plane').addClass('animate');
        $('.animation__plane--shadow').addClass('animate');
    }
});

  
function countdownTimer() {
    const difference = +new Date("2025-10-27T10:00:00") - +new Date();
    let remaining = "Conference Triumph: Celebrating Our Success and Looking Ahead!";

    if (difference > 0) {

      /* Calc months */
      startDate = new Date();
      endDate = new Date("2025-10-30T10:00:00");
      let monthCalc = Math.max((endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth(), 0);
      let days = Math.floor(difference / (1000 * 60 * 60 * 24));
      var months = parseInt(days / 30);
      days = days - months * 30;
      var weeks = parseInt(days / 7);
      days = days - weeks * 7;
      const parts = {
        months: months,
        weeks: weeks,
        days: days,
        // hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        // minutes: Math.floor((difference / 1000 / 60) % 60),
        // seconds: Math.floor((difference / 1000) % 60),
      };
      remaining = Object.keys(parts).map(part => {
        return `<li><span class="number">${parts[part]}</span><span class="unit">${part}</span></li>`;
      }).join(" ");
    }

    document.querySelector("#countdown3 ul").innerHTML = remaining;
  }

  if($('.counter-section').length > 0){
    countdownTimer();
    setInterval(countdownTimer, 1000);
  }
  
  //   AOS.init();
  AOS.init({
    once: true,
  });

//   ******* AGENDA TAB *********
$('.agenda-home .agenda-tab-item').on('click', function(){
    $('.agenda-list').slideToggle('slow');
});

//  Modal - opens on page load
$(window).on('load', function() {
    const invitee = new bootstrap.Modal($('#invitee_modal'));
    invitee.show();
});

$('.car-detail').on('click', function(){
    console.log('working');
    $(this).parent().find('.more-detail').slideToggle('slow');
});