/*
    Data Service
    @description: retrieve and manipulate data
 */
(function() {
    'use strict';
    angular
        .module('bellApp')
        .service('dataService', ['$http', dataServiceFunction]);

    function dataServiceFunction($http) {
        var service = {
            getGoaltenders: getGoaltenders,
            getSkaters: getSkaters,
            updateHeaders: updateHeaders,
            filter: filter
        };
        return service;

        function filter(a, value) {
            var str;
            return a.filter(function(el) {
               str = el.join(',');
               if (str.indexOf(value) > -1) {
                   return el;
               }
            });
        }

        function updateHeaders(a) {
            return a.map(function(el) {
                if (!el) return;
                var e = el.slice(0,4);
                if (e === 'http') {
                    return 'N/A';
                } else if (el.indexOf('-') > -1) {
                    var a = el.split('-');
                    var res = '';
                    a.forEach(function(v) {
                        res += v.charAt(0).toUpperCase();
                    });
                    return res;
                } else {
                    if (el.length > 10) {
                        return el.charAt(0).toUpperCase() + el.slice(1, 5);
                    } else {
                        return el.charAt(0).toUpperCase() + el.slice(1);
                    }
                }
            });
        }

        function getGoaltenders() {
            return $http.get('services/goaltenders.json');
            //return $http.get('https://drive.google.com/file/d/0Byt0rakzaB6bNXM0RW1ua3owY1U/view');
        }

        function getSkaters() {
            return $http.get('services/skaters.json');
            //return $http.get('https://drive.google.com/file/d/0Byt0rakzaB6bdEhCSmFnZDBuZlU/view');
        }
    }
})();
