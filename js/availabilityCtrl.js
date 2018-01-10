(function () {
    'use strict';

    var app = angular
        .module('app');

    app.controller('availabilityCtrl', availabilityCtrl);

    availabilityCtrl.$inject = ['$scope', 'dataFactory', '$state'];

    function availabilityCtrl($scope, dataFactory, $state) {
        $scope.roomTypes = getRoomTypes();

        $scope.toInput = new Date();
        $scope.fromInput = new Date();

        $scope.searchAvailability = function (from, to, roomType) {
            $scope.availableRooms = [];
            $scope.noRoomsFoundError = false;
            from = from.valueOf();
            to = to.valueOf();
            dataFactory.getAvailability(from, to, roomType)
                .then(function (response) {
                    console.log(response.data);
                    $scope.availableRooms = response.data;
                }, function (error) {
                    $scope.noRoomsFoundError = true;
                })
        };

        $scope.addReservation = function (roomId, roomName, from, to, totalPrice) {
            from = from.toISOString().substr(0, 10);
            to = to.toISOString().substr(0, 10);
            console.log(roomId, roomName, from, to, totalPrice);
            $state.go('addCustomer', {newReservationData: { id: roomId, roomName: roomName, from: from,
                        to: to, totalPrice: totalPrice}});
        };

        function getRoomTypes() {
            dataFactory.getRoomTypes()
                .then(function (response) {
                    $scope.roomTypes = response.data;
                }, function (error) {
                    console.log('Unable to get room types!');
                })
        }

    }

})();