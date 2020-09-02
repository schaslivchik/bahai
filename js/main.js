

$(window).scroll(function () {

  $('.nav-bahai').toggleClass('nav-bahai-scrolled', $(this).scrollTop() > 0);

  var scroll = $(window).scrollTop();

  $('.layer').each(function () {

    var layer = $(this);

    var dataSpeed = layer.data('parallax-speed');

    var offsetY = -(scroll * dataSpeed);

    var translate = 'translate3d(0, ' + offsetY + 'px, 0)';

    layer.css('-webkit-transform', translate);

    layer.css('-moz-transform', translate);

    layer.css('-ms-transform', translate);

    layer.css('-o-transform', translate);

    layer.css('transform', translate);

  });

});

$('.trigger-menu').click(function () {
  $('.nav-bahai').toggleClass('show-menu');
  $('.trigger-menu').toggleClass('trigger-menu-active')
})

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date('Sep 5, 2020 00:00:00').getTime(),
  x = setInterval(function () {

    let now = new Date().getTime(),
      distance = countDown - now;

    document.getElementById('days').innerText = Math.floor(distance / (day)),
      document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

    //do something later when date is reached
    //if (distance < 0) {
    //  clearInterval(x);
    //  'IT'S MY BIRTHDAY!;
    //}

  }, second)

