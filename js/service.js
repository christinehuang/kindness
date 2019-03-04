$(document).on('ready', function() {
 var $status = $('.counter');
 var $slickElement = $('.facility-mobile');

 $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text( i + '/' + slick.slideCount);
 });

 $slickElement.slick({
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        variableWidth: true,
        prevArrow: '<div class="slide-arrow prev-arrow white"><img src="images/slide-prev-w.svg" alt=""></div>',
        nextArrow: '<div class="slide-arrow next-arrow white"><img src="images/slide-next-w.svg" alt=""></div>',
        autoplay: false,
        autoplaySpeed: 1000, 
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            centerPadding: '110px',
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
            centerPadding: '0px',
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            prevArrow: '<div class="slide-arrow prev-arrow white"><img src="images/slide-prev-w.svg" alt=""></div>',
            nextArrow: '<div class="slide-arrow next-arrow white"><img src="images/slide-next-w.svg" alt=""></div>',
            centerPadding: '0px',
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

