
$(document).ready(function() {


$("li").mouseenter(function() {
  $(this).css("color", "#cccccc");
  $(this).mouseleave(function() {
    $(this).css("color", "red");
  });

  
  
});

  
  
/*

$('#test').bind('mouseenter', function() {
    var self = $(this);
    this.iid = setInterval(function() {
       self.append('X');
    }, 525);
}).bind('mouseleave', function(){
    this.iid && clearInterval(this.iid);
});
  
 
function run() {  
  $(".attributes").hover(function() { 
    var prev = $("#scroll li:first-child");
    $.unique(prev).each(function(i) {
      $(this).delay(i*600).slideUp(function() {
        $(this).appendTo(this.parentNode).slideDown();
      });
    });
  });
}
  
window.setInterval(run,200);

*/

});