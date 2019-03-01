$(document).ready(function(){

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  //build a scene
  var ourScene = new ScrollMagic.Scene({
      triggerElement: '#section1-pic',
      triggerHook: 0.7,
      reverse: true
  })
  .setClassToggle('#section1-pic', 'fade-in') //add class to section1-pic
  .addIndicators({
    name: 'pic fade',
    colorTrigger: 'black',
    colorStart: '#F60',
    colorEnd: 'Pink'
  })//this is requires a plugin
  .addTo(controller);

  //build a scene
  var ourScene2 = new ScrollMagic.Scene({
      triggerElement: '#k-bg',
      triggerHook: 0.3,
      reverse: true
  })
  .setClassToggle('#k-bg', 'fade-in') //add class to section1-pic
  .addIndicators({
    name: 'k fade2',
    colorTrigger: '#F98',
    colorStart: '#F60',
    colorEnd: 'Pink'
  })//this is requires a plugin
  .addTo(controller);

  //build a scene
  var ourScene3 = new ScrollMagic.Scene({
      triggerElement: '#section2-pic',
      triggerHook: 0.6,
      reverse: true
  })
  .setClassToggle('#section2-pic', 'fade-in') //add class to section1-pic
  .addIndicators({
    name: 'pic2 fade3',
    colorTrigger: '#c90',
    colorStart: '#F60',
    colorEnd: 'Pink'
  })//this is requires a plugin
  .addTo(controller);

  var ourScene4 = new ScrollMagic.Scene({
      triggerElement: '#section2-txt',
      triggerHook: 0.4,
      reverse: true
  })
  .setClassToggle('#section2-txt', 'fade-in') //add class to section1-pic
  .addIndicators({
    name: 'txt fade4',
    colorTrigger: '#c90',
    colorStart: '#F60',
    colorEnd: 'Pink'
  })//this is requires a plugin
  .addTo(controller);

  var ourScene5 = new ScrollMagic.Scene({
      triggerElement: '#section3-pic',
      triggerHook: 0.6,
      reverse: true
  })
  .setClassToggle('#section3-pic', 'fade-in') //add class to section1-pic
  .addIndicators({
    name: 'pic3 fade5',
    colorTrigger: '#c90',
    colorStart: '#F60',
    colorEnd: 'Pink'
  })//this is requires a plugin
  .addTo(controller);

  var ourScene6 = new ScrollMagic.Scene({
      triggerElement: '#section3-txt',
      triggerHook: 0.4,
      reverse: true
  })
  .setClassToggle('#section3-txt', 'fade-in') //add class to section1-pic
  .addIndicators({
    name: 'txt2 fade5',
    colorTrigger: '#c90',
    colorStart: '#F60',
    colorEnd: 'Pink'
  })//this is requires a plugin
  .addTo(controller);

//index changing bg
  var ourScene7 = new ScrollMagic.Scene({
      triggerElement: '#section3',
      triggerHook: 0,
      reverse: true
  })
  .setClassToggle('#section3', 'black') //add class to section1-pic
  .addIndicators({
    name: 'changebg',
    colorTrigger: '#c90',
    colorStart: '#F60',
    colorEnd: 'Pink'
  })//this is requires a plugin
  .addTo(controller);

  var ourScene13 = new ScrollMagic.Scene({
      triggerElement: '#section3',
      triggerHook: 0,
      reverse: true
  })
  .setClassToggle('#content3-more-b', 'dis') //add class to section1-pic
  .addIndicators({
    name: 'disnone',
    colorTrigger: '#c90',
    colorStart: '#F60',
  })//this is requires a plugin
  .addTo(controller);

  var ourScene14 = new ScrollMagic.Scene({
      triggerElement: '#section3',
      triggerHook: 0,
      reverse: true
  })
  .setClassToggle('#content3-more-w', 'show') //add class to section1-pic
  .addIndicators({
    name: 'disshow',
    colorTrigger: '#c90',
    colorStart: '#F60',
  })//this is requires a plugin
  .addTo(controller);

  var ourScene8 = new ScrollMagic.Scene({
      triggerElement: '#section3',
      triggerHook: 0,
      reverse: true
  })
  .setClassToggle('#navbar', 'black') //add class to section1-pic
  .addIndicators({
    name: 'changebg nav',
    colorTrigger: '#c90',
    colorStart: '#F60',
    colorEnd: 'Pink'
  })//this is requires a plugin
  .addTo(controller);

  var ourScene9 = new ScrollMagic.Scene({
      triggerElement: '#section3',
      triggerHook: 0,
      reverse: true
  })
  .setClassToggle('#nav-logo-b', 'dis') //add class to section1-pic
  .addIndicators({
    name: 'changebg nav',
    colorTrigger: '#c90',
    colorStart: '#F60',
    colorEnd: 'Pink'
  })//this is requires a plugin
  .addTo(controller);

  var ourScene10 = new ScrollMagic.Scene({
      triggerElement: '#section3',
      triggerHook: 0,
      reverse: true
  })
  .setClassToggle('#nav-logo-w', 'show') //add class to section1-pic
  .addIndicators({
    name: 'changebg nav',
    colorTrigger: '#c90',
    colorStart: '#F60',
    colorEnd: 'Pink'
  })//this is requires a plugin
  .addTo(controller);

  var ourScene11 = new ScrollMagic.Scene({
      triggerElement: '#section3',
      triggerHook: 0,
      reverse: true
  })
  .setClassToggle('#section4', 'black') //add class to section1-pic
  .addIndicators({
    name: 'changenewsbg',
    colorTrigger: 'red',
    colorStart: '#F60',
    colorEnd: 'Pink'
  })//this is requires a plugin
  .addTo(controller);

  var ourScene13 = new ScrollMagic.Scene({
      triggerElement: '#section3',
      triggerHook: 0,
      reverse: true
  })
  .setClassToggle('#index-1200', 'white') //add class to section1-pic
  .addIndicators({
    name: 'changenavbg',
    colorTrigger: 'red',
    colorStart: '#F60',
    colorEnd: 'Pink'
  })//this is requires a plugin
  .addTo(controller);

//this is news
 $('.news_list').each(function(){

    //build a scene
  var ourScene12 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.8,
      reverse: true
  })
  .setClassToggle(this, 'fade-in') //add class to section1-pic
  .addIndicators({
    name: 'newsfade',
    colorTrigger: '#F60',
    colorStart: '#F60',
    colorEnd: 'Pink'
  })//this is requires a plugin
  .addTo(controller);
  });

});

