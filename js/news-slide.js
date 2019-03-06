$(document).on('ready', function() {
       $(".news-banner").slick({
        dots: true,
        prevArrow: '<div class="slide-arrow prev-arrow white"><img src="images/slide-prev-w.svg" alt=""></div>',
        nextArrow: '<div class="slide-arrow next-arrow white"><img src="images/slide-next-w.svg" alt=""></div>',
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000, 
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            prevArrow: '<div class="slide-arrow prev-arrow white"><img src="images/slide-prev-w.svg" alt=""></div>',
            nextArrow: '<div class="slide-arrow next-arrow white"><img src="images/slide-next-w.svg" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            prevArrow: '<div class="slide-arrow prev-arrow white"><img src="images/slide-prev-w.svg" alt=""></div>',
            nextArrow: '<div class="slide-arrow next-arrow white"><img src="images/slide-next-w.svg" alt=""></div>',
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 330,
          settings: {
            prevArrow: '<div class="slide-arrow prev-arrow white"><img src="images/slide-prev-w.svg" alt=""></div>',
            nextArrow: '<div class="slide-arrow next-arrow white"><img src="images/slide-next-w.svg" alt=""></div>',
            centerPadding: '0px',
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
   });


});

