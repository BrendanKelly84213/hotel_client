(function () {
    'use strict';

    var app = angular
        .module('app', ['ui.router',
                        'ui.bootstrap',
                        'ngAnimate'
                        ]);


    app.controller('ctrl', ctrl);

    ctrl.$inject = ['$scope', '$location'];

    function ctrl($scope, $location) {
        $scope.welcomeMsg = 'Welcome to hotel app. Use the menu above to nagivate.';
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });

        $scope.isLogged = function () {
            return typeof $scope.loggedUser !== 'undefined';
        };
        $scope.logout = function () {
            console.log('elo');
            $scope.loggedUser = undefined;
            $location.path("/login");
        }
    }

})();