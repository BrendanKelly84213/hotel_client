(function () {
    'use strict';

    var app = angular
        .module('app');

    app.controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$scope', 'dataFactory', '$state', '$window'];

    function loginCtrl($scope, dataFactory, $state, $window) {

        $scope.login = function () {
            var loginDto = {
                "username": $scope.username,
                "password": $scope.password
            };

            dataFactory.login(loginDto)
                .then(function (response) {
                    $window.localStorage.setItem('user', loginDto.username);
                    console.log('zalogowano jako ' + $window.localStorage.getItem('user'));
                    $scope.$parent.isLoggedIn = true;
                    $scope.$parent.is
                    $state.go('main');
                }, function (error) {

                });
        }

    }

})();