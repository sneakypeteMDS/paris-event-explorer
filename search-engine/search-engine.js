'use strict'

/**
 *  Class SearchEngine: A class to manage API request with a search bar.  
 */
var SearchEngine = function SearchEngine () {
  
}

/**
 * This function add two event listener click and keypress to the searchbar.
 */
SearchEngine.prototype.init = function () {
  var elClick = document.querySelector('#searchButton');
  var elSearchBar = document.querySelector('#searchBar');

  elClick.addEventListener('click', function() {
    checkSearch(elSearchBar.value);
  })

  elSearchBar.addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;

    if (key === 13) {
      checkSearch(elSearchBar.value);
    } 
  })
}

/**
 * This function check search format to launch it.
 * 0params {String} search.
 */
SearchEngine.prototype.checkSearch = function (search) {
  var regexSearch = /[a-zA-Z-0-9-\/]+/;

  if (regexSearch.test(search)) {
    // send to api request
  }

  if (!regexSearch.test(search)) {
    document.getElementById('search-info').innerHTML = "Le format de recherche est incorrect! Seul les nombres, les lettres, '/' et '-' sont autorisés";
  }
}

SearchEngine.prototype.init();