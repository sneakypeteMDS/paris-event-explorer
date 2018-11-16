
'use strict'
/*
  *
  *
  */   
var btnclick = document.querySelector('#maps-button');
btnclick.addEventListener('click',initMap);

var events = [];
var event1 = {
 title : 'test1', 
 description : 'defeznjfnczl',
 price : '24e',
 address: '4 place Jussieu 75005 Paris'
};
var event2 = {
title : 'test2', 
description : 'defeznjfnczl',
 price : '24e',
address: '10/12 rue des Lyonnais, 75005 Paris'
};
var event3 = {
  title : 'test3', 
  description : 'defeznjfnczl',
  price : '24e',
  address: '123 rue Saint Martin, 75004 Paris'
};
var event4 = {
  title : 'test4', 
  description : 'defeznjfnczl',
  price : '24e',
  address: '123 rue Saint Martin, 75004 Paris'
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
            '<h1 id="firstHeading" class="firstHeading">'+event.title+'</h1>'+
            '<div id="bodyContent">'+
            '<p>'+event.description+'</p>'+
            '<p>'+event.price+'</p>'+
            '<p>'+event.address+'</p>'+
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