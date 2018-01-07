(function () {
    'use strict';

    angular
        .module('app')
        .config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
            function ($locationProvider, $stateProvider, $urlRouterProvider) {
                $locationProvider.hashPrefix('');
                $urlRouterProvider.otherwise('/');


                var main = {
                    name: 'main',
                    url: '/',
                    templateUrl: 'views/main.html'
                };

                var addCustomer = {
                    name: 'addCustomer',
                    url: '/addCustomer',
                    templateUrl: 'views/addCustomer.html',
                    controller: 'customerCtrl'
                };

                var addPayment = {
                    name: 'addPayment',
                    url: '/addPayment',
                    templateUrl: 'views/addPayment.html'
                };

                var addReservation = {
                    name: 'addReservation',
                    url: '/addReservation',
                    params: {
                        id: null,
                        name: null,
                        surname: null
                    },
                    templateUrl: 'views/addReservation.html',
                    controller: 'newReservationCtrl'
                };
                var addRoom = {
                    name: 'addRoom',
                    url: '/addRoom',
                    templateUrl: 'views/addRoom.html',
                    controller: 'roomCtrl'
                };

                var customers = {
                    name: 'customers',
                    url: '/customers',
                    templateUrl: 'views/customers.html',
                    controller: 'customerCtrl'
                };

                var login = {
                    name: 'login',
                    url: '/login',
                    templateUrl: 'views/login.html'
                };

                var payments = {
                    name: 'payments',
                    url: '/payments',
                    templateUrl: 'views/payments.html'
                };

                var reservations = {
                    name: 'reservations',
                    url: '/reservations',
                    templateUrl: 'views/reservations.html'
                };

                var rooms = {
                    name: 'rooms',
                    url: '/rooms',
                    templateUrl: 'views/rooms.html',
                    controller: 'managerCtrl'
                };

                var availability = {
                    name: 'availability',
                    url: '/availability',
                    templateUrl: 'views/availability.html',
                    controller: 'availabilityCtrl'
                };

                var prices = {
                    name: 'prices',
                    url: '/prices',
                    templateUrl: 'views/prices.html',
                    controller: 'managerCtrl'
                };

                var roomTypes = {
                    name: 'roomTypes',
                    url: '/roomTypes',
                    templateUrl: 'views/roomTypes.html',
                    controller: 'managerCtrl'
                };


                $stateProvider.state(main);
                $stateProvider.state(addCustomer);
                $stateProvider.state(addPayment);
                $stateProvider.state(addReservation);
                $stateProvider.state(addRoom);
                $stateProvider.state(customers);
                $stateProvider.state(login);
                $stateProvider.state(payments);
                $stateProvider.state(reservations);
                $stateProvider.state(rooms);
                $stateProvider.state(availability);
                $stateProvider.state(prices);
                $stateProvider.state(roomTypes);


            }]);
})();