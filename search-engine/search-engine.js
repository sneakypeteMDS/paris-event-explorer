'use strict'

/**
  * Request OpenDataParis API with params given and return API response
  * @params {String} requestParam
  * @return String or Boolean
  */
function doODPAPIRequest(requestParam) {
  var xhttp = new XMLHttpRequest();
  var request = "https://opendata.paris.fr/api/records/1.0/search/?dataset=evenements-a-paris&q=".requestParam."&rows=20&refine.tags=Paris";
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      return this.responseText;
    }
    return false;
  };
  xhttp.open("GET", request, true);
  xhttp.send();
}