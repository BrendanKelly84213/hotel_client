(function () {
    'use strict';

    var app = angular
        .module('app');

    app.controller('newReservationCtrl', newReservationCtrl);

    newReservationCtrl.$inject = ['$scope', 'dataFactory', '$state'];

    function newReservationCtrl($scope, dataFactory, $state) {

        var newReservationData = {
            id: $state.params.id,
            firstName: $state.params.firstName,
            lastName: $state.params.lastName
        };

        $scope.data = newReservationData;
        console.log(newReservationData);

        $scope.addNewReservation = function () {

            console.log("Adding newReservation: ");

        };
    }

})();