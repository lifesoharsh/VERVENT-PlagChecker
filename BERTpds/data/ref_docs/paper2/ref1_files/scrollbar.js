jQuery( document ).ready(function( $ ) {
  function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }
  var headerPos = $('.syn-page-header');

  var docHeight = $(document).height(),
  windowHeight = $(window).height(),
  scrollPercent;
  
  $(window).scroll(function() {
    scrollPercent = $(window).scrollTop() / (docHeight - windowHeight) * 100;
    $('.scrollbar__progress').width(scrollPercent + '%');
  });

});