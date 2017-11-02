$(document).ready(function () {






var hex = new Clipboard('.hex');
var rgb = new Clipboard('.rgb');


  $(".mobil-button").click(function () {
    $(this).toggleClass("active");
    $('aside').toggleClass("show");
  });
  $("aside ul li a").click(function () {
    $('aside').removeClass("show");
  });




  var typed = new Typed('.typed', {
    strings: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione eius quisquam qui tenetur maxime, alias earum excepturi odio numquam, rem consequatur."],
    typeSpeed: 30,
    loop: true,
    loopCount: Infinity
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 265) {
      $('aside').addClass("sticky");
    } else {
      $('aside').removeClass("sticky");
    }
  });




  











// scroll spy and smooth scroll
$(function () {
  $(window).on('scroll', function () {
    var WindowTop = $(window).scrollTop();
    $('section').each(function (i) {
      if (WindowTop > $(this).offset().top - 50 &&
        WindowTop < $(this).offset().top + $(this).outerHeight(true)
      ) {
        $('aside ul li a').removeClass('active');
        $('aside ul  li').eq(i).find('a').addClass('active');
      }
    });
  });
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });


});
  
  
  
});  