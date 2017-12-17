(function () {
    'use strict';

    var app = angular
        .module('app', ['ui.router',
                        'ui.bootstrap',
                        'ngAnimate'
                        ]);


    app.controller('ctrl', ctrl);

    ctrl.$inject = ['$scope', 'dataFactory'];

    function ctrl($scope) {
        $scope.welcomeMsg = 'Welcome to hotel app. Use the menu above to nagivate.';

/*

        function getRooms() {
            dataFactory.getRooms()
                .then(function (response) {
                    $scope.rooms = response.data;
                }, function (error) {
                    // TODO dialog -> error
                })
        }
        $scope.addRoom = function (room) {
            dataFactory.addRoom(room)
                .then(function (response) {
                    // TODO dialog -> Data added
                }, function (error) {
                    // TODO dialog -> error
                })
        }*/
    }
})();