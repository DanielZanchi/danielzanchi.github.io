(function($) {
  $(window).scroll(function() {
    var mass = Math.max(30, 70-0.06*$(this).scrollTop()) + 'px';

    $('.flexible-fontsize').css({'font-size': mass, 'line-height': mass});
  });
})(jQuery);
