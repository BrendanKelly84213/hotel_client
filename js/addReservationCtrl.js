(function () {
    'use strict';

    var app = angular
        .module('app');

    app.controller('addReservationCtrl', addReservationCtrl);

    addReservationCtrl.$inject = ['$scope', 'dataFactory', '$state'];

    function addReservationCtrl($scope, dataFactory, $state) {

        $scope.newReservationData = $state.params.newReservationData;
        $scope.newCustomer = $state.params.newCustomer;

        $scope.addNewReservation = function () {
            var customerId = null;
            dataFactory.addCustomer($scope.newCustomer)
                .then(function (response) {
                    console.log('dodajemy klienta');
                    console.log(response.data);
                    customerId = response.data.id;
                }, function (error) {
                    console.log("Unable to add customer");
                });
            var reservationDto = {
                since: $scope.newReservationData.from,
                upTo: $scope.newReservationData.to,
                room: {
                    id: $scope.newReservationData.id
                },
                customer: {
                    id: customerId
                }
            };

            dataFactory.addReservation(reservationDto)
                .then(function (response) {
                    console.log('rezerwacja dodana');
                })
        };
    }

})();