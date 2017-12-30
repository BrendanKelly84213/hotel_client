(function () {
    'use strict';

    var app = angular
        .module('app');

    app.controller('roomCtrl', roomCtrl);

    roomCtrl.$inject = ['$scope', 'dataFactory', '$state'];

    function roomCtrl($scope, dataFactory, $state) {
        this.rooms = getRooms();
        this.roomTypes = getRoomTypes();

        $scope.refresh = function () {
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
                    console.log(error);
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
                    console.log(error);
                })
        };
    }

})();