// custom facet js
$(document).on('facetwp-loaded', function() {
  const button = $('.facet-search__button');
  const searchContainer = $('.facets__search-container');
  if (!$._data(button.get(0), 'events')) {
    button.click(function() {
      searchContainer.toggleClass('is-active');
    });
  }
});
