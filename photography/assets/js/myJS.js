(function($) {
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

  var titleFontSize = 50;
  if (width < 600) {
    titleFontSize = 30;
  }

  $(window).scroll(function() {
    var mass = Math.max((titleFontSize - 10), titleFontSize-0.06*$(this).scrollTop()) + 'px';

    var newClass = 'title-flexible-fontsize';
    if (width < 600) {
      newClass = 'title-flexible-fontsize-600';
      $('.title').addClass(newClass).removeClass('title-flexible-fontsize');
    }

    $('.' + newClass).css({'font-size': mass, 'line-height': mass});



    var bottomPadding = Math.max(18, 50-0.08*$(this).scrollTop());
    var bottomPaddingPx = bottomPadding + 'px';
    var topPadding = Math.min(50, bottomPadding+0.8*$(this).scrollTop()) + 'px';

    if (width < 600) {
      bottomPadding = Math.min(0, 10-0.08*$(this).scrollTop());
      bottomPaddingPx = bottomPadding + 'px';
    }

    $('.topbar').css({'padding-bottom': bottomPaddingPx, 'padding-top': topPadding});

    var opacity = Math.min(0.9, 0.9-0.008*$(this).scrollTop());
    $('.subtitle-flexible-fontsize').css({'opacity': opacity});
  });
})(jQuery);
