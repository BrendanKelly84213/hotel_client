(function () {
    'use strict';

    var app = angular
        .module('app');

    app.controller('priceCtrl', priceCtrl);

    priceCtrl.$inject = ['$scope', 'dataFactory', '$state'];

    function priceCtrl($scope, dataFactory, $state) {
/*        validateState();

        function validateState() {
            if ($state.params.id == null || $state.params.name == null){

            }
            $scope.roomInfo = {
                id: $state.params.id,
                name: $state.params.name
            };
        }*/

        $scope.roomInfo = {
            id: $state.params.id,
            name: $state.params.name
        };
        console.log($scope.roomInfo);

        $scope.getPrices = function (from, to) {
            //send a GET request with from, to, roomId
        };



        $('#searchBtn').click(function () {
            if($('#addPrice').hasClass('show'))
                $('#addPrice').collapse('hide');
        });

        $('#addBtn').click(function () {
            if($('#searchPrice').hasClass('show'))
                $('#searchPrice').collapse('hide');
        });

        $('#refreshBtn').click(function () {
            if($('#searchPrice').hasClass('show'))
                $('#searchPrice').collapse('hide');
            if($('#addPrice').hasClass('show'))
                $('#addPrice').collapse('hide');
        });


/*        this.rooms = getRooms();
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