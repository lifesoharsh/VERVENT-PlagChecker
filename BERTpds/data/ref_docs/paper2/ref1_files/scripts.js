// Custom scripts file

jQuery( document ).ready(function( $ ) {

  'use strict';

  // Function to retrieve URL params
  $.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
      return null;
    }
    else{
      return decodeURI(results[1]) || 0;
    }
  }


  // Generic function that runs on window resize.
  function resizeStuff() {
  }

  // Runs function once on window resize.
  var TO = false;
  $(window).resize(function () {
    if (TO !== false) {
      clearTimeout(TO);
    }

    

    // 200 is time in miliseconds.
    TO = setTimeout(resizeStuff, 200);
  }).resize();

  // body no scroll when menu is open
  $('header.syn-page-header').on('click', function(e) {
    if ($(this).hasClass('nav-open')) {
      $('body').addClass('no-scroll');
    } else {
      $('body').removeClass('no-scroll');
    }
  })

  $('.syn-dropdown').on('click', function() {
    $(this).toggleClass('open')
  })

  // resize select to match current width 
  function setSelectWidth(id) {
    var sel = $(`#${id}`);
    var text = $(`#${id} option:selected`).text();
    $(`#${id}-templateOption`).text( text);
    sel.width( $(`#${id}-template`).width() * 1.03 );
  }

  const getExistingSearchQuery = () => {
    var sQuery = location.href.match(/\?s(.*)/g);
    if(sQuery) {
      return sQuery[0].replace(/\&(.*)/g, '');
    }
    return false;
  }

   // Script to sort posts.
  $('#filter-dropdown').on('change', function(e) {
    setSelectWidth('filter-dropdown')
    // if search query exists
    var searchQuery = getExistingSearchQuery();
    var option = e.target.options[e.target.selectedIndex].value;
    var newUrl = location.href.replace(/\?(.*)/g, '');
    var query = '?';
    if(searchQuery) {
      newUrl = newUrl + searchQuery;
      query = '&'
    }
    newUrl = newUrl + query + option;
    document.location.href = newUrl;
  });

  // Script to sort posts.
  $('#category-dropdown').on('change', function(e) {
    setSelectWidth('category-dropdown')
    // if search query exists
    var url = new URL(document.location);
    var searchQuery = getExistingSearchQuery();
    var option = e.target.options[e.target.selectedIndex].value;
    var newUrl = url.origin + (url.pathname.match(/\/category(.*)/g) ? url.pathname.replace(/\/category(.*)/g, option) : url.pathname + option);
    // Remove duplicate forward slashes
    newUrl = newUrl.replace(/([^:])(\/\/+)/g, '$1/');
    if(searchQuery) {
      newUrl = newUrl + searchQuery;
    }
    document.location.href = newUrl;
  });

  // Change the dropdown to match the query
  var url = new URL(document.location);
  var params = url.search.match(/\orderby(.*)/g);
  if (params && params[0]) {
    $("#filter-dropdown").val(params[0]);
  }
  
  // Change the category dropdown to match the query
  var url = new URL(document.location);
  var params = (url.search.match(/\orderby(.*)/g) || url.search.match(/\?s(.*)/g) ? url.href.match(/\/category(.+?)(?=\?)/g) : url.href.match(/\/category(.*)/g))
  if (params && params[0]) {
    $("#category-dropdown").val(params[0]);
  }

  setSelectWidth('category-dropdown')
  setSelectWidth('filter-dropdown')

  // Search form
  $('.search__open-button').click(() => {
    $('.filters-container').addClass('search-open');
    $('.searchform__input').focus();
  })

  $('.search__close-button').click(() => {
    $('.filters-container').removeClass('search-open');
  })

  // Hide sign in/up buttons when logged in
  function checkSignIn() {
    if(sessionStorage.getItem('signedIn') == true) {
      $('.hide-if-signed-in').addClass('signed-in');
    } else {
      fetch('/webapi/user', {
        headers: {
          accept: 'application/json, text/plain, */*',
        }
      }).then(res => res.json())
      .then(data => {
        if (data.user) {
          $('.hide-if-signed-in').addClass('signed-in');
          sessionStorage.setItem('signedIn', true);
        }
      }).catch(err => {
        // console.log('error', err);
      })
    }
  }

  checkSignIn();

});
