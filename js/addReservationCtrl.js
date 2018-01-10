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
            dataFactory.addCustomer($scope.newCustomer)
                .then(function (response) {
                    console.log('dodajemy klienta');
                    console.log(response.data.id);
                    var customerId = response.data.id;

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
                            $state.go('reservations');
                        })
                }, function (error) {
                    console.log("Unable to add customer");
                });

        };
    }

})();