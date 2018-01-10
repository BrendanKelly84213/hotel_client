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

    }

})();