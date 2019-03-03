$(document).on('ready', function() {
 var $status = $('.counter');
 var $slickElement = $('.variable');

 $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
 });

 $slickElement.slick({
        dots: false,
        prevArrow: '<div class="slide-arrow prev-arrow"><img src="images/slide-prev.svg" alt=""></div>',
        nextArrow: '<div class="slide-arrow next-arrow"><img src="images/slide-next.svg" alt=""></div>',
        infinite: true,
        speed: 300,
        centerMode: true,
        centerPadding: '210px',
        slidesToShow: 1,
        slidesToScroll: 1,
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
            centerPadding: '50px',
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerPadding: '0px',
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
 });

});

