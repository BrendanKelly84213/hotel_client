(function () {
    'use strict';

    var app = angular
        .module('app');

    app.controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$scope', 'dataFactory', '$location'];

    function loginCtrl($scope, dataFactory, $location) {

        $scope.login = function () {
            var loginDto = {
                "username": $scope.username,
                "password": $scope.password
            };

            dataFactory.login(loginDto)
                .then(function (response) {
                    $scope.message = "User " + login + " logged in successfully!";
                    $('#modalHeader').addClass('bg-success').removeClass('bg-danger');
                    $('#modal').modal('show');
                    $location.path('/main');
                    $scope.$parent.loggedUser = response.data;
                }, function (error) {
                    $scope.message = ("Error - wrong login and password!");
                    $('#modalHeader').addClass('bg-danger').removeClass('bg-success');
                    $('#modal').modal('show');
                });
        }

    }

})();