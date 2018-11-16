
'use strict'
/*
  *
  *
  */   
var btnclick = document.querySelector('#maps-button');
btnclick.addEventListener('click',initMap);

var events = [];
var event1 = {
 address: '4 place Jussieu 75005 Paris',
};
var event2 = {
 address: '10/12 rue des Lyonnais, 75005 Paris',
};
var event3 = {
 address: '123 rue Saint Martin, 75004 Paris',
};
var event4 = {
 address: '123 rue Saint Martin, 75004 Paris',
};
events.push(event1);
events.push(event2);
events.push(event3);
events.push(event4);
/**
Allow to set multiple markers on different locations
*param : events 
*/
function initMap() {
var map = new google.maps.Map(document.querySelector('#map'), {
     zoom: 12,
     center: {lat: 48.866667, lng: 2.333333}
    });

var geocoder = new google.maps.Geocoder();
var marker = [];
events.forEach(function(event) {
marker += addMarker(geocoder,event,marker,map);
});
}

/**
Allow to set multiple markers on different locations
*param : geocoder 
*param : event
*param : marker
*param : map
*/
function addMarker(geocoder,event,marker,map) {
  geocoder.geocode({'address': event.address}, function(results,status) {
   marker = new google.maps.Marker({
     map : map,
     position: results[0].geometry.location 
  });
  var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

  var infowindow = new google.maps.InfoWindow({
  content: contentString
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

 }
)}