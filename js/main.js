// some mind blowing mobile nav jquery
$(document).ready(function() {
  $("#toggle").click(function() {
    $(this).fadeToggle("slow", 0);
    $(".overlay-nav").fadeIn("slow,", 0)
    $(".close").click(function() {
      $(this).fadeToggle("slow", 0)
      $(".overlay-nav").fadeOut("slow", 0)
      $("#toggle").fadeIn("slow", 0)
      $(".close").fadeIn("slow", 0)

    });
  });
});

// About Link going to about picture with supporting paragraphs

$(document).ready(function() {
  $('.about').click(function() {
    $('html, body').animate({
      scrollTop: $('.about-me').offset().top
    }, 1200);
  });
});

//Portfolio Link going to flexbox portfolio section
$(document).ready(function() {
  $('.projects').click(function() {
    $('html, body').animate({
      scrollTop: $("#projects").offset().top
    }, 1200);
  });
});

// Contact link going to contact section
$(document).ready(function() {
  $('.contact-nav').click(function() {
    $('html, body').animate({
      scrollTop: $('.contact').offset().top
    }, 1200);
  });
});

// Work link going to portfolio section
$(document).ready(function() {
  $('.work').click(function() {
    $('html, body').animate({
      scrollTop: $('.flex').offset().top
    }, 1200);
  });
});

$(document).ready(function() {
  $('a').click(function() {
    $('overlay-nav').fadeOut();
  });
});

// Figure animations
$(document).ready(function() {
  // $('#one').on({
  //   mouseenter: function() {
  //     $('#img1').css("height", "75px")
  //     $('#img1').css("opacity", "1")
  //   }
  // });

  $('#one, #two, #three, #four, #five, #six, #seven').on({
    mouseleave: function() {
      $('figcaption').css("height", "0px")
      $('figcaption').css("opacity", "0")
    }

  });
});

$(document).ready(function() {
  $('#one').hover(
    function() {
      $('#one').css("z-index", "200")
			$('#one').css("transform", "scale(1.14)")
      $('#two').css("-webkit-filter", "grayscale(100%)")
      $('#three').css("-webkit-filter", "grayscale(100%)")
      $('#four').css("-webkit-filter", "grayscale(100%)")
      $('#five').css("-webkit-filter", "grayscale(100%)")
      $('#six').css("-webkit-filter", "grayscale(100%)")
      $('#seven').css("-webkit-filter", "grayscale(100%)")
      $('#eight').css("-webkit-filter", "grayscale(100%)")
    },
    function() {
      $('#one').css("z-index", "2")
			$(this).css("transform", "scale(1.0)")
      $('#two').css("-webkit-filter", "grayscale(0%)")
      $('#three').css("-webkit-filter", "grayscale(0%)")
      $('#four').css("-webkit-filter", "grayscale(0%)")
      $('#five').css("-webkit-filter", "grayscale(0%)")
      $('#six').css("-webkit-filter", "grayscale(0%)")
      $('#seven').css("-webkit-filter", "grayscale(0%)")
      $('#eight').css("-webkit-filter", "grayscale(0%)")
    }
  )
});

$(document).ready(function() {
  $('#two').hover(
    function() {
      $('#two').css("z-index", "200")
			$(this).css("transform", "scale(1.14)")
      $('#one').css("-webkit-filter", "grayscale(100%)")
      $('#three').css("-webkit-filter", "grayscale(100%)")
      $('#four').css("-webkit-filter", "grayscale(100%)")
      $('#five').css("-webkit-filter", "grayscale(100%)")
      $('#six').css("-webkit-filter", "grayscale(100%)")
      $('#seven').css("-webkit-filter", "grayscale(100%)")
      $('#eight').css("-webkit-filter", "grayscale(100%)")
    },
    function() {
      $('#two').css("z-index", "2")
			$(this).css("transform", "scale(1.0)")
      $('#one').css("-webkit-filter", "grayscale(0%)")
      $('#three').css("-webkit-filter", "grayscale(0%)")
      $('#four').css("-webkit-filter", "grayscale(0%)")
      $('#five').css("-webkit-filter", "grayscale(0%)")
      $('#six').css("-webkit-filter", "grayscale(0%)")
      $('#seven').css("-webkit-filter", "grayscale(0%)")
      $('#eight').css("-webkit-filter", "grayscale(0%)")
    }
  )
});

$(document).ready(function() {
  $('#three').hover(
    function() {
      $('#three').css("z-index", "200")
			$(this).css("transform", "scale(1.14)")
      $('#one').css("-webkit-filter", "grayscale(100%)")
      $('#two').css("-webkit-filter", "grayscale(100%)")
      $('#four').css("-webkit-filter", "grayscale(100%)")
      $('#five').css("-webkit-filter", "grayscale(100%)")
      $('#six').css("-webkit-filter", "grayscale(100%)")
      $('#seven').css("-webkit-filter", "grayscale(100%)")
      $('#eight').css("-webkit-filter", "grayscale(100%)")
    },
    function() {
      $('#three').css("z-index", "2")
			$(this).css("transform", "scale(1.0)")
      $('#one').css("-webkit-filter", "grayscale(0%)")
      $('#two').css("-webkit-filter", "grayscale(0%)")
      $('#four').css("-webkit-filter", "grayscale(0%)")
      $('#five').css("-webkit-filter", "grayscale(0%)")
      $('#six').css("-webkit-filter", "grayscale(0%)")
      $('#seven').css("-webkit-filter", "grayscale(0%)")
      $('#eight').css("-webkit-filter", "grayscale(0%)")
    }
  )
});

$(document).ready(function() {
  $('#four').hover(
    function() {
      $('#four').css("z-index", "200")
			$(this).css("transform", "scale(1.14)")
      $('#one').css("-webkit-filter", "grayscale(100%)")
      $('#two').css("-webkit-filter", "grayscale(100%)")
      $('#three').css("-webkit-filter", "grayscale(100%)")
      $('#five').css("-webkit-filter", "grayscale(100%)")
      $('#six').css("-webkit-filter", "grayscale(100%)")
      $('#seven').css("-webkit-filter", "grayscale(100%)")
      $('#eight').css("-webkit-filter", "grayscale(100%)")
    },
    function() {
      $('#four').css("z-index", "2")
			$(this).css("transform", "scale(1.0)")
      $('#one').css("-webkit-filter", "grayscale(0%)")
      $('#two').css("-webkit-filter", "grayscale(0%)")
      $('#three').css("-webkit-filter", "grayscale(0%)")
      $('#five').css("-webkit-filter", "grayscale(0%)")
      $('#six').css("-webkit-filter", "grayscale(0%)")
      $('#seven').css("-webkit-filter", "grayscale(0%)")
      $('#eight').css("-webkit-filter", "grayscale(0%)")
    }
  )
});

$(document).ready(function() {
  $('#five').hover(
    function() {
      $('#five').css("z-index", "200")
			$(this).css("transform", "scale(1.14)")
      $('#one').css("-webkit-filter", "grayscale(100%)")
      $('#two').css("-webkit-filter", "grayscale(100%)")
      $('#three').css("-webkit-filter", "grayscale(100%)")
      $('#four').css("-webkit-filter", "grayscale(100%)")
      $('#six').css("-webkit-filter", "grayscale(100%)")
      $('#seven').css("-webkit-filter", "grayscale(100%)")
      $('#eight').css("-webkit-filter", "grayscale(100%)")
    },
    function() {
      $('#five').css("z-index", "2")
			$(this).css("transform", "scale(1.0)")
      $('#one').css("-webkit-filter", "grayscale(0%)")
      $('#two').css("-webkit-filter", "grayscale(0%)")
      $('#three').css("-webkit-filter", "grayscale(0%)")
      $('#four').css("-webkit-filter", "grayscale(0%)")
      $('#six').css("-webkit-filter", "grayscale(0%)")
      $('#seven').css("-webkit-filter", "grayscale(0%)")
      $('#eight').css("-webkit-filter", "grayscale(0%)")
    }
  )
});

$(document).ready(function() {
  $('#six').hover(
    function() {
      $('#six').css("z-index", "200")
			$(this).css("transform", "scale(1.14)")
      $('#one').css("-webkit-filter", "grayscale(100%)")
      $('#two').css("-webkit-filter", "grayscale(100%)")
      $('#three').css("-webkit-filter", "grayscale(100%)")
      $('#four').css("-webkit-filter", "grayscale(100%)")
      $('#five').css("-webkit-filter", "grayscale(100%)")
      $('#seven').css("-webkit-filter", "grayscale(100%)")
      $('#eight').css("-webkit-filter", "grayscale(100%)")
    },
    function() {
      $('#six').css("z-index", "2")
			$(this).css("transform", "scale(1.0)")
      $('#one').css("-webkit-filter", "grayscale(0%)")
      $('#two').css("-webkit-filter", "grayscale(0%)")
      $('#three').css("-webkit-filter", "grayscale(0%)")
      $('#four').css("-webkit-filter", "grayscale(0%)")
      $('#five').css("-webkit-filter", "grayscale(0%)")
      $('#seven').css("-webkit-filter", "grayscale(0%)")
      $('#eight').css("-webkit-filter", "grayscale(0%)")
    }
  )
});

$(document).ready(function() {
  $('#seven').hover(
    function() {
      $('#seven').css("z-index", "200")
			$(this).css("transform", "scale(1.14)")
      $('#one').css("-webkit-filter", "grayscale(100%)")
      $('#two').css("-webkit-filter", "grayscale(100%)")
      $('#three').css("-webkit-filter", "grayscale(100%)")
      $('#four').css("-webkit-filter", "grayscale(100%)")
      $('#five').css("-webkit-filter", "grayscale(100%)")
      $('#six').css("-webkit-filter", "grayscale(100%)")
      $('#eight').css("-webkit-filter", "grayscale(100%)")
    },
    function() {
      $('#seven').css("z-index", "2")
			$(this).css("transform", "scale(1.0)")
      $('#one').css("-webkit-filter", "grayscale(0%)")
      $('#two').css("-webkit-filter", "grayscale(0%)")
      $('#three').css("-webkit-filter", "grayscale(0%)")
      $('#four').css("-webkit-filter", "grayscale(0%)")
      $('#five').css("-webkit-filter", "grayscale(0%)")
      $('#six').css("-webkit-filter", "grayscale(0%)")
      $('#eight').css("-webkit-filter", "grayscale(0%)")
    }
  )
});

$(document).ready(function() {
  $('#eight').hover(
    function() {
      $('#eight').css("z-index", "200")
			$(this).css("transform", "scale(1.14)")
      $('#one').css("-webkit-filter", "grayscale(100%)")
      $('#two').css("-webkit-filter", "grayscale(100%)")
      $('#three').css("-webkit-filter", "grayscale(100%)")
      $('#four').css("-webkit-filter", "grayscale(100%)")
      $('#five').css("-webkit-filter", "grayscale(100%)")
      $('#six').css("-webkit-filter", "grayscale(100%)")
      $('#seven').css("-webkit-filter", "grayscale(100%)")
    },
    function() {
      $('#eight').css("z-index", "2")
			$(this).css("transform", "scale(1.0)")
      $('#one').css("-webkit-filter", "grayscale(0%)")
      $('#two').css("-webkit-filter", "grayscale(0%)")
      $('#three').css("-webkit-filter", "grayscale(0%)")
      $('#four').css("-webkit-filter", "grayscale(0%)")
      $('#five').css("-webkit-filter", "grayscale(0%)")
      $('#six').css("-webkit-filter", "grayscale(0%)")
      $('#seven').css("-webkit-filter", "grayscale(0%)")
    }
  )
});
// $(document).ready(function() {
//   $('#two').on({
//     mouseenter: function() {
//       $('#img2').css("height", "0px")
//       $('#img2').css("opacity", "0")
//     }
//   })
// });
//
// $(document).ready(function() {
//   $('#three').on({
//     mouseenter: function() {
//       $('#img3').css("height", "75px")
//       $('#img3').css("opacity", "1")
//     }
//   })
// });
//
// $(document).ready(function() {
//   $('#four').on({
//     mouseenter: function() {
//       $('#img4').css("height", "75px")
//       $('#img4').css("opacity", "1")
//     }
//   })
// });
//
// $(document).ready(function() {
//   $('#five').on({
//     mouseenter: function() {
//       $('#img5').css("height", "75px")
//       $('#img5').css("opacity", "1")
//     }
//   })
// });
//
// $(document).ready(function() {
//   $('#six').on({
//     mouseenter: function() {
//       $('#img6').css("height", "75px")
//       $('#img6').css("opacity", "1")
//     }
//   })
// });
//
// $(document).ready(function() {
//   $('#seven').on({
//     mouseenter: function() {
//       $('#img7').css("height", "75px")
//       $('#img7').css("opacity", "1")
//     }
//   })
// });
//
// $(document).ready(function() {
//   $('#eight').on({
//     mouseenter: function() {
//       $('#img8').css("height", "75px")
//       $('#img8').css("opacity", "1")
//     }
//   })
// });
// End figcaption animations

// figcaption doesn't show up under 960px. Should get better performance on mobile.
$(document).ready(function() {
  $(window).resize(function() {
    if ($(window).width() < 960) {
      $('figcaption').css('display', 'none')
    } else {
      $('figcaption').css('display', 'block')
    }
  });
});







// Give Figcaption an ID and on MouseEnter And Leave use CSS properties #work
