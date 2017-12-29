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

        $scope.addReservation = function (id, firstName, lastName) {
            console.log(id, firstName, lastName);
            $state.go('addReservation', { id: id, firstName: firstName, lastName: lastName});
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
                "firstName" : $scope.name,
                "lastName" : $scope.surname,
                "birthday" : $scope.dateOfBirth,
                "identityCard": {
                    "number" : $scope.idCardNumber,
                    "dateExpiring" : new Date($scope.idCardExp).getMonth(),
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