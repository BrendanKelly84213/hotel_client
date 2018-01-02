(function () {
    'use strict';

    var app = angular
        .module('app');

    app.controller('managerCtrl', managerCtrl);

    managerCtrl.$inject = ['$scope', 'dataFactory', '$state'];

    function managerCtrl($scope, dataFactory, $state) {
        $scope.prices = "elo tu ceny";
        $scope.roomTypes = "elo tu rodzaje pokoi";
        console.log("elo");

    }

})();