(function() {
    'use strict';

    angular
        .module('taco')
        .controller('MainController', function(API) {
          const vm = this;

          var mymap = L.map('mapid').setView([39.1, -84.5], 13);
          L.tileLayer('https://api.mapbox.com/styles/v1/neiheiselmax/cj1xr1b2z00022sqtgsyvji1p/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmVpaGVpc2VsbWF4IiwiYSI6ImNqMXhyM2NhajAwMTUyd3BscTBvYnZqbDIifQ.e7DmxnSVfKfzD1DrSjIdBg', {
          attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
          maxZoom: 18,
          }).addTo(mymap);

          let stations = API.getStation();
          stations.then(function successCallback(response){
          console.log(response)
          response.data.network.stations.forEach(station=>{
            var marker = L.marker([station.latitude, station.longitude]).addTo(mymap);
          })
        })






        })
})();
