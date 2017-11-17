(function () {
    'use strict';

    var app = angular
        .module('app', ['ui.router',
                        'ui.bootstrap',
                        'ngAnimate'
                        ]);


    app.controller('ctrl', ctrl);

    ctrl.$inject = ['$scope'];

    function ctrl($scope) {
        $scope.test = 'Welcome to hotel app. Use the menu above to nagivate.';
        $scope.customers = [
        {
            "id": 1,
            "name": "Jacek",
            "surname": "Kowalski",
            "birthday": "27/01/1994",
            "identityCard": "AUR287543"
        },
        {
            "id": 2,
            "name": "Janek",
            "surname": "Kowalski",
            "birthday": "21/01/1994",
            "identityCard": "AUR287346"
        },
        {
            "id": 3,
            "name": "Andrzej",
            "surname": "Kowalski",
            "birthday": "22/01/1994",
            "identityCard": "AUR287597"
        }
        ];

        $scope.rooms = [
            {
                "id": 1,
                "number": "101",
                "capacity": 2,
                "roomType": "twin room",
                "roomStatus": "free"
            },
            {
                "id": 2,
                "number": "102",
                "capacity": 1,
                "roomType": "single room",
                "roomStatus": "occupied"
            },
            {
                "id": 3,
                "number": "103",
                "capacity": 6,
                "roomType": "dormitory",
                "roomStatus": "to clean"
            }
        ]

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

    }

})();