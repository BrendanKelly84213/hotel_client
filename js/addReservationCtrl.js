(function () {
    'use strict';

    var app = angular
        .module('app');

    app.controller('addReservationCtrl', addReservationCtrl);

    addReservationCtrl.$inject = ['$scope', 'dataFactory', '$state'];

    function addReservationCtrl($scope, dataFactory, $state) {

        var newReservationData = {
            id: $state.params.roomId,
            roomName: $state.params.roomName,
            from: $state.params.from,
            to: $state.params.to,
            totalPrice: $state.params.totalPrice
        };

        $scope.data = newReservationData;
        console.log(newReservationData);

        $scope.addNewReservation = function () {
            console.log("Adding newReservation: ");
        };
    }

})();