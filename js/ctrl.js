(function () {
    'use strict';

    var app = angular
        .module('app', ['ui.router',
                        'ui.bootstrap',
                        'ngAnimate'
                        ]);


    app.controller('ctrl', ctrl);

    ctrl.$inject = ['$scope', 'dataFactory'];

    function ctrl($scope, dataFactory) {
        $scope.test = 'Welcome to hotel app. Use the menu above to nagivate.';

        $scope.customers;
        getCustomers();

        $scope.rooms;
        getRooms();

        $scope.payments = [
            {
                "id": 1,
                "reservationId": 1,
                "customerId": 1,
                "type": "cash",
                "amount": 54
            },
            {
                "id": 2,
                "reservationId": 2,
                "customerId": 2,
                "type": "card",
                "amount": 146
            },
            {
                "id": 3,
                "reservationId": 3,
                "customerId": 3,
                "type": "card",
                "amount": 29
            }

        ]

        $scope.reservations = [
            {
                "id": 1,
                "status": "OK",
                "from": "26/11/2017",
                "to": "28/11/2017",
                "price": 217,
                "room": "101"

            },
            {
                "id": 2,
                "status": "OK",
                "from": "12/12/2017",
                "to": "26/12/2017",
                "price": 96,
                "room": "103"

            },
            {
                "id": 3,
                "status": "OK",
                "from": "14/01/2018",
                "to": "22/01/2018",
                "price": 195,
                "room": "102"

            }
        ]

        function getCustomers() {
            dataFactory.getCustomers()
                .then(function (response) {
                    $scope.customers = response.data;
                }, function (error) {
                    console.log('UNABLE TO get customers!');
                })
        }
        $scope.addCustomer = function (customer) {
            // adapt to dto
            customer.identityCard.monthExpiring = new Date(customer.identityCard.idCardExpiring).getMonth();
            customer.identityCard.yearExpiring = new Date(customer.identityCard.idCardExpiring).getYear();

            dataFactory.addCustomer(customer)
                .then(function (response) {
                    // TODO dialog -> Data added
                }, function (error) {
                    // TODO dialog -> error
                })
        };

        function getRooms() {
            dataFactory.getRooms()
                .then(function (response) {
                    $scope.rooms = response.data;
                }, function (error) {
                    // TODO dialog -> error
                })
        }
    }

})();