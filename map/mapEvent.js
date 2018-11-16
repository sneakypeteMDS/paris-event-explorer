'use strict'

var btnclick = document.querySelector('#map-button');
btnclick.addEventListener('click',function(events){
initMap(events)
});

/**
Allow to set multiple markers on different locations
*param : events 
*/
function initMap(events) {
var map = new google.maps.Map(document.querySelector('#map'), {
          zoom: 12,
          center: {lat: 48.866667, lng: 2.333333}
        });

  var geocoder = new google.maps.Geocoder();
  var address = ['17 avenue d\'Iéna, 75116 Paris','15 rue Marsoulan 75012 PARIS'];
  var marker = [];
  addMarker(geocoder,address,marker,map);
}

/**
Allow to set multiple markers on different locations
*param : geocoder 
*param : event
*param : marker
*param : map
*/
function addMarker(geocoder,address,marker,map) {
  for (var i = 0; i < address.length; i++) {
    geocoder.geocode({'address': address[i]}, function(results,status) {
      marker[i] = new google.maps.Marker({
          map : map,
          position: results[0].geometry.location  
              
      })
          
    });
  }
}

   