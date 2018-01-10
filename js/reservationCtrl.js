(function () {
    'use strict';

    var app = angular
        .module('app');

    app.controller('reservationCtrl', reservationCtrl);

    reservationCtrl.$inject = ['$scope', 'dataFactory', '$state'];

    function reservationCtrl($scope, dataFactory, $state) {
        this.reservations = getReservations();

        $scope.refresh = function () {
            console.log("odswiezanko");
            this.reservations = getReservations();
        };

        function getReservations() {
            dataFactory.getReservations()
                .then(function (response) {
                    console.log(response.data);
                    $scope.reservations = response.data;
                }, function (error) {
                    console.log('Unable to get reservations');
                })
        }

        $scope.searchReservations = function () {
            console.log('search reservations');
            dataFactory.searchReservations($scope.fromInput.getTime(), $scope.toInput.getTime())
                .then(function (response) {
                    $scope.reservations = response.data;
                }, function (error) {
                    console.log('Unable to get reservations');
                })
        };

        $scope.deleteReservation = function (reservation) {
            dataFactory.deleteReservation(reservation.id)
                .then(function (response) {
                    getReservations();
                }, function (error) {
                })
        }

    }

})();