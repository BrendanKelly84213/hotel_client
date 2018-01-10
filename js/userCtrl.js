(function () {
    'use strict';

    var app = angular
        .module('app');

    app.controller('userCtrl', userCtrl);

    userCtrl.$inject = ['$scope', 'dataFactory', '$state'];

    function userCtrl($scope, dataFactory, $state) {
        this.users = getUsers();
        this.roles = getRoles();

        $scope.refresh = function () {
            console.log("odswiezanko");
            this.users = getUsers();
        };

        function getUsers() {
            dataFactory.getUsers()
                .then(function (response) {
                    $scope.users = response.data;
                }, function (error) {
                    console.log('Unable to get users!');
                })
        }

        function getRoles() {
            dataFactory.getRoles()
                .then(function (response) {
                    $scope.roles = response.data;
                }, function (error) {
                    console.log('Unable to get roles!');
                })
        }

        $scope.addUser = function (username, email, password, firstName, lastName, roleId) {
            var user = {
                "username": username,
                "email": email,
                "password": password,
                "firstName": firstName,
                "lastName": lastName,
                "role": {
                    "id": roleId
                }
            };
            dataFactory.addUser(user)
                .then(function (response) {
                    if (response.data !== null) {
                        $scope.message = "User added successfully!";
                        $('#modalHeader').addClass('bg-success').removeClass('bg-danger');
                        $('#modal').modal('show');
                        $('#addUser').collapse('hide');
                        $('#usernameInput').val('');
                        $('#emailInput').val('');
                        $('#passwordInput').val('');
                        $('#firstNameInput').val('');
                        $('#lastNameInput').val('');
                    }
                }, function (error) {
                    console.log('Unable to add user!');
                    $('#modalHeader').addClass('bg-danger').removeClass('bg-success');
                    $('#modal').modal('show');
                });
        };

        $scope.searchUsers = function () {
            dataFactory.searchUsers($scope.usernameSearchInput, $scope.roleSearchInput)
                .then(function (response) {
                    $scope.users = response.data;
                }, function (error) {
                    console.log('Unable to get users!');
                })
        }

    }

})();