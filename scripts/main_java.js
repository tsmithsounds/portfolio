

$(document).ready(function() {

  
  window.onresize = function(){ location.reload(); }
  
// Text rotator

  $('#list').textition({
    autoplay: false,
    animation: 'ease-in-out',
    interval: 3,
    speed: 1.5,
    map: {
    x: 70,
    y: 50,
    } 
  }); 
  
// Icon actions

  $('#home').mouseenter(function() {
    $('#icon1').css('opacity', '100');
    $('#home').mouseleave(function() {
      $('#icon1').css('opacity', '0');
    });
  });
 
  $('#web').mouseenter(function() {
    $('#icon2').css('opacity', '100');
    $('#web').mouseleave(function() {
      $('#icon2').css('opacity', '0');
    });
  });
    
    $('#graphics').mouseenter(function() {
    $('#icon3').css('opacity', '100');
    $('#graphics').mouseleave(function() {
      $('#icon3').css('opacity', '0');
    });
  });
  
    $('#sounds').mouseenter(function() {
    $('#icon4').css('opacity', '100');
    $('#sounds').mouseleave(function() {
      $('#icon4').css('opacity', '0');
    });
  });
  
    $('#contact').mouseenter(function() {
    $('#icon5').css('opacity', '100');
    $('#contact').mouseleave(function() {
      $('#icon5').css('opacity', '0');
    });
  });
    
  
  
  $('#home').mouseenter(function() {
    $(this).addClass('homebuttonhover');
  $('#home').mouseleave(function() {
    $(this).removeClass('homebuttonhover');
  });
  });
  
  
// Home button scroll !! Need to fix its reaction to scrolling only and to entering other buttons
/* 
$.fn.isInViewport = function() {
var elementTop = $(this).offset().top;
var elementBottom = elementTop + $(this).outerHeight();
var viewportTop = $(window).scrollTop();
var viewportBottom = viewportTop + $(window).height();
return elementBottom > viewportTop && elementTop < viewportBottom;
};
  
  
$(window).on('scroll resize', function() {
  if ($('#signature').isInViewport()) {  
  $('#home').addClass('homebuttonhover');
  } else {
    $('#home').removeClass('homebuttonhover');
  }
}); 
  
  
 */ 
  
  
  
  
  /* Cool script to resize square projects based on height of container 
  
  var containerHeight = $('.projectcontainer').height();
  var containerWidth = $('.projectcontainer').width();
  
  if (containerHeight < containerWidth) {
    var newWidth = (containerHeight * .46)
    $('.graphicsproject').css('width', newWidth);
    $('.graphicsproject').css('padding-bottom', newWidth);
    console.log(newWidth);
  }
  
  */
  
  
 /* 
  
  var projHeight = $('.graphicsproject').height();
  var projWidth = $('.graphicsproject').width();
  
  $('.overflow').css('height', projHeight);
  $('.overflow').css('width', projWidth);
  
  
  
  */
  
  if ($(window).width() < 600){
  
    $('#wprojtext').replaceWith($('#webtext'));
    $('#gprojtext').replaceWith($('#graphicstext'));
    $('#sprojtext').replaceWith($('#soundstext'));
    $('#contactrcontent').replaceWith($('#contacttext'));
  }
  
  
  
  
  
  
  
  
  
  });
  
  
  
