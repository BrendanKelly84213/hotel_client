(function () {
    'use strict';

    var app = angular
        .module('app');

    app.controller('addCustomerCtrl', addCustomerCtrl);

    addCustomerCtrl.$inject = ['$scope', 'dataFactory', '$state'];

    function addCustomerCtrl($scope, dataFactory, $state) {

        var newReservationData = $state.params.newReservationData;

        $scope.data = newReservationData;
        $scope.dateOfBirth = new Date();
        $scope.idCardExpiring = new Date();

        $scope.customerError = false;

        var newCustomer = {
            "firstName" : $scope.firstNameInput,
            "lastName" : $scope.lastNameInput,
            "pesel": $scope.peselInput,
            "birthday" : $scope.dateOfBirth,
            "identityCard": {
                "number" : $scope.idCardNumber,
                "expiringDate" : $scope.idCardExp,
                "type": $scope.idCardType
            }
        };

        $scope.addCustomer = function () {
            $scope.customerError = false;
            dataFactory.addCustomer(newCustomer)
                .then(function (response) {
                    if (response.data != null) {
                        $scope.message = "Room type added successfully!"
                    }
                }, function (error) {
                    $scope.customerError = true;
                    console.log("Unable to add customer");
                });

        };
    }

})();