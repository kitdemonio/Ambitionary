function changeText(element, text) {
  $(element).on('click', function () {
    $('.popup').show();
    $('.popup').find('p').hide();
    $('.popup').find('p').text(text).fadeIn();
  });
}


$('#sticky-nav').stick_in_parent({
  parent: 'body',
  stickyClass: 'is_stuck'
});
$(document.body).trigger('sticky_kit:recalc');

$(window).bind('scroll', function () {
  if ($(window).scrollTop() > window.innerHeight) {
    $('.navbar').addClass('second-nav');
  } else {
    $('.navbar').removeClass('second-nav');
  }
});

$(document).ready(function () {
  $('.popup').hide();
  changeText('#visionary', 'Visionaries are the individuals looking to find the Contributors they need to achieve their goals.');
  changeText('#contributor', 'Contributors are the individuals looking to market their services to the Visionaries.');
  changeText('#both', 'I fit on both sides of the market.');
  $('.btn-bordered-white').on('click', function (event) {
    event.preventDefault();
    $(this).prev('p').text('Thank you!');
  });
});
