(function() {
    'use strict';

    angular
        .module('taco')
        .factory('API', function($http){

          return {
            getStation:() => {
            return $http({
                method:"GET",
                url:"http://api.citybik.es/v2/networks/cincy-red-bike",
              })
          }
          }

        })

})();
