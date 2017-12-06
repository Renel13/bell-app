(function() {
    'use strict';
    angular
        .module('bellApp')
        .component('skatersComponent', {
            templateUrl: 'components/skaters/skaters.html',
            controllerAs: 'vm',
            bindings: {
                headers: '<',
                statistics: '<'
            },
            controller: function() {
                var vm = this;
            }
        });
})();
