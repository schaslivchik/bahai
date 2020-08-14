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

