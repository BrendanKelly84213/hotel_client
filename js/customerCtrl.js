(function () {
    'use strict';

    var app = angular
        .module('app');

    app.controller('customerCtrl', customerCtrl);

    customerCtrl.$inject = ['$scope', 'dataFactory'];

    function customerCtrl($scope, dataFactory) {
        this.customers = getCustomers();

        $scope.refresh = function () {
            console.log("odswiezanko");
            this.customers = getCustomers();
        };

        $scope.searchCustomer = function () {
            console.log("Looking for customer");
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

            console.log("Adding customer: ");
            console.log(customer);
            dataFactory.addCustomer(customer)
                .then(function (response) {
                    $scope.result = response.message;
                }, function (error) {
                    console.log("Unable to add customer");
                })
        };
    }

})();