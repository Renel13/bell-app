'use strict';

angular.module('bellApp', [
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.when('/goaltenders', {
      templateUrl: 'views/goaltenders.html',
      controller: goalTendersController,
      controllerAs: 'vm'
    })
    .when('/skaters', {
      templateUrl: 'views/skaters.html',
      controller: skatersController,
      controllerAs: 'vm'
    });

    $routeProvider.otherwise({redirectTo: '/goaltenders'});

    function goalTendersController(dataService) {
        var vm = this;
        vm.search = '';
        vm.responseObj = [];
        vm.searchFunction = function() {
            vm.statistics = dataService.filter(vm.responseObj.data.Statistics, vm.search);
        };

        dataService.getGoaltenders().then(
            function(response) {
              vm.responseObj = response;
              vm.headers = dataService.updateHeaders(response.data.Headers);
              vm.statistics = response.data.Statistics;
            },
            function(err) {
              throw new Error(err);
            }
        );

    }

    function skatersController(dataService) {
        var vm = this;
        vm.search = '';
        vm.responseObj = [];
        vm.searchFunction = function() {
            vm.statistics = dataService.filter(vm.responseObj.data.Statistics, vm.search);
        };

        dataService.getSkaters().then(
            function(response) {
                vm.responseObj = response;
                vm.headers = dataService.updateHeaders(response.data.Headers);
                vm.statistics = response.data.Statistics;
            },
            function(err) {
                throw new Error(err);
            }
        );

    }
}]);
