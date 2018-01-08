(function () {
    'use strict';

    var app = angular
        .module('app');

    app.controller('roomTypeCtrl', roomTypeCtrl);

    roomTypeCtrl.$inject = ['$scope', 'dataFactory', '$state'];

    function roomTypeCtrl($scope, dataFactory, $state) {
        getRoomTypes();

        $scope.refresh = function () {
            getRoomTypes();
        };

        $scope.addRoomType = function (name, description) {
            var roomType = {
                "name": name,
                "description": description
            };
            console.log(roomType);

            dataFactory.addRoomType(roomType)
                .then(function (response) {
                    $scope.message = "Room type added.";
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


        $scope.removeRoomType = function (id) {
            dataFactory.deleteRoomType(id)
                .then(function (response) {
                    $scope.message = "Room type removed successfully";
                    $('#modalHeader').addClass('bg-success').removeClass('bg-danger');
                    $('#modalRoomType').modal('show');
                    getRoomTypes();
                }, function (error) {
                    $scope.message = "Error - failed to remove room type.";
                    $('#modalHeader').addClass('bg-danger').removeClass('bg-success');
                    $('#modalRoomType').modal('show');
                });

        }
    }

})();