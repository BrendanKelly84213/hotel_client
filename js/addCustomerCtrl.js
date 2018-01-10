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


        $scope.addCustomer = function () {
            $scope.customerError = false;

            var idCardType = getIdCardType();

            var newCustomer = {
                "firstName" : $scope.firstNameInput,
                "lastName" : $scope.lastNameInput,
                "pesel": $scope.peselInput,
                "birthday" : $scope.dateOfBirth.toISOString().substr(0, 10),
                "identityCard": {
                    "number" : $scope.idCardNumber,
                    "expiringDate" : $scope.idCardExpiring.toISOString().substr(0, 10),
                    "type": idCardType
                }
            };

            $state.go('addReservation', {newReservationData: newReservationData, newCustomer: newCustomer})

            console.log(newCustomer);
        };

        function getIdCardType() {
            if ($('#passportType').is(':checked')){
                return 'PASSPORT'
            }
            if ($('#idCardType').is(':checked')){
                return 'PASSPORT'
            }
        }
    }

})();