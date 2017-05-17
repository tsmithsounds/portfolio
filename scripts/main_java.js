
$(document).ready(function() {

  
  window.onresize = function(){ location.reload(); }
  
// Text rotator

  $('#list').textition({
    autoplay: false,
    animation: 'ease-in-out',
    interval: 3.0,
    speed: 2.0,
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
    
  
  
  
  
  });
  
  
  
