'use strict'


/**
 *  Class SearchEngine 
 */
var SearchEngine = function SearchEngine () {
  
}

/**
 * Init function
 */
SearchEngine.prototype.init = function () {
  var elClick = document.querySelector('#search-button');
  var elSearchBar = document.querySelector('#searchbar');

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
 * Check Search Format
 */
SearchEngine.prototype.checkSearch = function (search) {
  var regexNumber = /^[0-9]*$/

  if (regexNumber.test(search)) {
    document.getElementById('search-info').innerHTML = 'uniquement chaine de caractere';
  } 
}

SearchEngine.prototype.init();
