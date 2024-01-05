$(document).ready(function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    
    $(".page__section-title").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();

      if (objectBottom < windowBottom) {
        $(this).addClass("animate-underline");
      }
    });

    // Добавление класса animate-rating-button к элементу с классом rating-button
    $(".section__rating-button").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();

      if (objectBottom < windowBottom) {
        $(this).addClass("animate-rating-button");
      }
    });

    // Добавление класса animate-button к элементу с классом button
    $(".button").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();

      if (objectBottom < windowBottom) {
        $(this).addClass("animate-button");
      }
    });

  }).scroll();
});

document.querySelectorAll('.faq details').forEach((item) => {
  item.addEventListener('toggle', (event) => {
    if (event.target.open) {
      document.querySelectorAll('.faq details').forEach((otherItem) => {
        if (otherItem !== event.target) {
          otherItem.removeAttribute('open');
        }
      });
    }
  });
});