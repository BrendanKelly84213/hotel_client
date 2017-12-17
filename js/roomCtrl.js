(function () {
    'use strict';

    var app = angular
        .module('app');

    app.controller('roomCtrl', roomCtrl);

    roomCtrl.$inject = ['$scope', 'dataFactory', '$state'];

    function roomCtrl($scope, dataFactory, $state) {
        this.rooms = getRooms();



        $scope.refresh = function () {
            console.log("odswiezanko");
            this.rooms = getRooms();
        };

        $scope.searchRoom = function () {
            console.log("Looking for room");
        };

        function getRooms() {
            dataFactory.getRooms()
                .then(function (response) {
                    $scope.rooms = response.data;
                }, function (error) {
                    console.log('Unable to get rooms!');
                })
        }

        $scope.addRoom = function () {

            console.log("Adding room: ");

        };
    }

})();