// HAMBURGER MENU 
$('.menu-burger, .menu-items').on('click', function() {
    $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
    $('.menu-burger').text() == "⚜" ? $('.menu-burger').text('✕') : $('.menu-burger').text('⚜');
});

//SVG DRAW
var $svg = $('svg').drawsvg({
    duration: 30000,
    easing: 'linear'
  });

$svg.drawsvg('animate');