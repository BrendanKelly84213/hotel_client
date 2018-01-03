(function () {
    'use strict';

    var app = angular
        .module('app');

    app.controller('availabilityCtrl', availabilityCtrl);

    availabilityCtrl.$inject = ['$scope', 'dataFactory', '$state'];

    function availabilityCtrl($scope, dataFactory, $state) {
        $scope.message;

        $scope.roomTypes = getRoomTypes();


        $scope.searchAvailability = function (from, to, roomType) {
            console.log(from + '\n' + to + '\n' + roomType);
            dataFactory.getAvailability(from, to, roomType)
                .then(function (response) {
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

    }

})();