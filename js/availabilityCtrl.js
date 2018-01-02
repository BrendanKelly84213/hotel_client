(function () {
    'use strict';

    var app = angular
        .module('app');

    app.controller('availabilityCtrl', availabilityCtrl);

    availabilityCtrl.$inject = ['$scope', 'dataFactory', '$state'];

    function availabilityCtrl($scope, dataFactory, $state) {
        $scope.roomTypes = getRoomTypes();

        $scope.searchAvailability = function (from, to, roomType) {
            dataFactory.getAvailability(from, to, roomType)
                .then(function (response) {
                    console.log(from + '\n' + to + '\n' + roomType);
                    $scope.roomTypes = response.data;
                }, function (error) {
                    console.log('Unable to get available rooms!');
                })
        };

        function getRoomTypes() {
            dataFactory.getRoomTypes()
                .then(function (response) {
                    console.log(response.data);
                    $scope.roomTypes = response.data;
                }, function (error) {
                    console.log('Unable to get room types!');
                })
        }

        /*$scope.refresh = function () {
            console.log("odswiezanko");
            this.roomTypes = getRoomTypes();
            this.rooms = getRooms();
        };

        $scope.searchRoom = function () {
            console.log("Looking for room");
        };

        function getRoomTypes() {
            dataFactory.getRoomTypes()
                .then(function (response) {
                    $scope.roomTypes = response.data;
                }, function (error) {
                    console.log('Unable to get roomTypes!');
                })
        }

        function getRooms() {
            dataFactory.getRooms()
                .then(function (response) {
                    $scope.rooms = response.data;
                }, function (error) {
                    console.log('Unable to get rooms!');
                })
        }

        $scope.addRoom = function (roomToAdd) {
            var room = {
                "number": roomToAdd.number,
                "maxCapacity": roomToAdd.maxCapacity,
                "roomType": {
                    "id": roomToAdd.roomTypeId
                }
            };
            dataFactory.addRoom(room)
                .then(function (response) {
                    $scope.result = response.message;
                }, function (error) {
                    console.log('Unable to add room! :');
                })
        };*/
    }

})();