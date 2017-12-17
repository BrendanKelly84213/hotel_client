(function () {
    'use strict';

    var app = angular
        .module('app');

    app.controller('customerCtrl', customerCtrl);

    customerCtrl.$inject = ['$scope', 'dataFactory', '$state'];

    function customerCtrl($scope, dataFactory, $state) {
        this.customers = getCustomers();

        $scope.refresh = function () {
            console.log("odswiezanko");
            this.customers = getCustomers();
        };

        $scope.addReservation = function (id, name, surname) {
            console.log(id, name, surname);
            $state.go('addReservation', { id: id, name: name, surname: surname});
        };
        
        $scope.searchCustomer = function (name, surname, cardNo) {
            dataFactory.searchCustomers(name, surname, cardNo)
                .then(function (response) {
                    $scope.customers = response.data;
                }, function (error) {
                    console.log('Unable to get customers list!');
                })
        };

        function getCustomers() {
            dataFactory.getCustomers()
                .then(function (response) {
                    $scope.customers = response.data;
                }, function (error) {
                    console.log('Unable to get customers!');
                })
        }

        $scope.addCustomer = function () {
            var customer = {
                "name" : $scope.name,
                "surname" : $scope.surname,
                "birthday" : $scope.dateOfBirth,
                "identityCard": {
                    "idCardType" : $scope.idCardType,
                    "idCardNumber" : $scope.idCardNumber,
                    "monthExpiring" : new Date($scope.idCardExp).getMonth(),
                    "yearExpiring" : new Date($scope.idCardExp).getYear()
                }
            };

            dataFactory.addCustomer(customer)
                .then(function (response) {
                    $scope.result = response.message;
                }, function (error) {
                    console.log("Unable to add customer");
                })
        };
    }

})();