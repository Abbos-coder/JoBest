$(function () {
   $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 50,
      mouseDrag: true,
      dots: true,
      nav: true,
      slideBy: 1,
      autoplayHoverPause: true,
      autoplayTimeout: 3000,
      autoplay: false,
      autoplaySpeed: 3000,
      stagePadding: 50,
      responsive: {
         0: {
            items: 1,
            dots: true,
            nav: true,
            stagePadding: 0,
            autoplay: false,
            margin: 0,
         },
         527: {
            margin: -100,
            items: 1,
            dots: true,
            nav: true,
            stagePadding: 0,
            autoplay: false,
         },
         414: {
            margin: -60,
            items: 1,
            dots: true,
            nav: true,
            stagePadding: 0,
            autoplay: false,
         },
         447: {
            items: 1,
            dots: true,
            nav: false,
            stagePadding: 0,
            autoplay: false,
            margin: -100,
         },
         578: {
            items: 1,
            dots: true,
            nav: false,
            stagePadding: 0,
            autoplay: false,
            margin: -150,
         },
         768: {
            items: 2,
            margin: 80,
            stagePadding: 50,
            autoplay: false,
         },
         1024: {
            items: 3,
            margin: 80,
            stagePadding: 50,
            autoplay: false,
         },
      },
   });
});
