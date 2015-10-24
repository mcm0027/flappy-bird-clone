    var z1gna06008sx1e3;(function(d, t) {
		var s = d.createElement(t), options = {
		'userName':'mcm0027',
		'formHash':'z1gna06008sx1e3',
		'autoResize':true,
		'height':'421',
		'async':true,
		'host':'wufoo.com',
		'header':'show',
		'ssl':true};
		s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
		s.onload = s.onreadystatechange = function() {
		var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
		try { z1gna06008sx1e3 = new WufooForm();z1gna06008sx1e3.initialize(options);z1gna06008sx1e3.display(); } catch (e) {}};
		var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
		})(document, 'script');
		

var smallMQ = window.matchMedia( "(max-width: 500px)" );

var medMQ = window.matchMedia( "(max-width: 500px)" );

var lrgMQ = window.matchMedia( "(max-width: 500px)" );

var hugeMQ = window.matchMedia( "(max-width: 500px)" );



$(document).ready(function(){
  
  if ($(window).width() > $(window).height()) {
  	$(".tall").hide();
  } else {
  	$(".wide").hide();
  }
  
  if (smallMQ.matches) {
  	$(".navLinks").hide();
  	$(".birdLeft").hide();
  	$(".birdRight").hide();
  } else {
  	$(".nav").hide();
  }
  
  $(".submenu").hide();
  
  $(".menu").click( function() {
    $(".submenu").slideToggle();
    if ($("#toggle").hasClass("fa-chevron-down")) {
    	$("#toggle").removeClass("fa-chevron-down");
    	$("#toggle").addClass("fa-chevron-up");
    } else {
    	$("#toggle").removeClass("fa-chevron-up");
    	$("#toggle").addClass("fa-chevron-down");
    }
    
  });
  
  $(".screenshots li:nth-child(odd)").css("margin-left", "1em");
  
  

  $('.splash-top').slick({
    slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
  	autoplaySpeed: 2500,
  });

			
  
});
  
  