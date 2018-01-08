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
            this.rooms = getRooms();
        };

        $scope.searchRoom = function () {
            console.log("Looking for room");
        };

        $scope.showPrices = function (id, name) {
            $state.go('prices', { id: id, name: name});
        };

        function getRoomTypes() {
            dataFactory.getRoomTypes()
                .then(function (response) {
                    $scope.roomTypes = response.data;
                }, function (error) {
                    console.log('Unable to get roomTypes!');
                });
        }

        function getRooms() {
            dataFactory.getRooms()
                .then(function (response) {
                    $scope.rooms = response.data;
                }, function (error) {
                    console.log('Unable to get rooms!');
                })
        }

        $scope.addRoom = function (number, roomTypeId, capacity) {
            var room = {
                "number": number,
                "maxCapacity": capacity,
                "roomType": {
                    "id": roomTypeId
                }
            };
            console.log(room);
            dataFactory.addRoom(room)
                .then(function (response) {
                    $scope.message = "Room added successfully.";
                    $('#modalHeader').addClass('bg-success').removeClass('bg-danger');
                    $('#modal').modal('show');
                    $('#newRoomType').collapse('hide');
                    $('#roomNameInput').val('');
                    $('#roomDescriptionInput').val('');
                    getRoomTypes();
                }, function (error) {
                    $scope.message = "Error - failed to add room type.";
                    $('#modalHeader').addClass('bg-danger').removeClass('bg-success');
                    $('#modal').modal('show');
                    console.log("Unable to add room type!");
                });
        };


        $('#searchBtn').click(function () {
            if($('#addRoom').hasClass('show'))
                $('#addRoom').collapse('hide');
        });

        $('#addBtn').click(function () {
            if($('#searchRoom').hasClass('show'))
                $('#searchRoom').collapse('hide');
        });

        $('#refreshBtn').click(function () {
            if($('#searchRoom').hasClass('show'))
                $('#searchRoom').collapse('hide');
            if($('#addRoom').hasClass('show'))
                $('#addRoom').collapse('hide');
        });
    }

})();