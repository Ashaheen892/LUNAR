/*=============================================
=            Section owl-carousel            =
=============================================*/

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

/*=====  End of Section owl-carousel  ======*/

/*=============================================
=            Section .pricing_tabs            =
=============================================*/

$(document).ready(function () {
  $(".pricing_tabs .nav-link.active .icon").addClass("fa-caret-down");
  $(".pricing_tabs .nav-link").click(function () {
    $(".pricing_tabs .nav-link .icon").removeClass("fa-caret-down");
    $(this).find(".icon").addClass("fa-caret-down");
  });
});

/*=====  End of Section .pricing_tabs  ======*/
