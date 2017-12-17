(function () {
    'use strict';

    var app = angular
        .module('app');

    app.controller('customerCtrl', customerCtrl);

    customerCtrl.$inject = ['$scope', 'dataFactory'];

    function customerCtrl($scope, dataFactory) {
        this.customers = getCustomers();

        function getCustomers() {
            dataFactory.getCustomers()
                .then(function (response) {
                    console.log(response);
                    $scope.customers = response.data;
                }, function (error) {
                    console.log('UNABLE TO get customers!');
                })
        }
    }

})();