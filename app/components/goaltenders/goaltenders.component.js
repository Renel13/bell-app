(function() {
    'use strict';
    angular
        .module('bellApp')
        .component('goaltendersComponent', {
            templateUrl: 'components/goaltenders/goaltenders.html',
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
