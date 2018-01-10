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
                    templateUrl: 'views/main.html',
                    controller: 'mainCtrl'
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
                        from: null,
                        to: null,
                        totalPrice: null
                    },
                    templateUrl: 'views/addReservation.html',
                    controller: 'addReservationCtrl'
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
                    templateUrl: 'views/login.html',
                    controller: 'loginCtrl'
                };

                var payments = {
                    name: 'payments',
                    url: '/payments',
                    templateUrl: 'views/payments.html'
                };

                var reservations = {
                    name: 'reservations',
                    url: '/reservations',
                    templateUrl: 'views/reservations.html',
                    controller: 'reservationCtrl'
                };

                var availability = {
                    name: 'availability',
                    url: '/availability',
                    templateUrl: 'views/availability.html',
                    controller: 'availabilityCtrl'
                };

                var rooms = {
                    name: 'rooms',
                    url: '/rooms',
                    templateUrl: 'views/rooms.html',
                    controller: 'roomCtrl'
                };

                var prices = {
                    name: 'prices',
                    url: '/prices',
                    params: {
                        name: null,
                        id: null
                    },
                    templateUrl: 'views/prices.html',
                    controller: 'priceCtrl'
                };

                var roomTypes = {
                    name: 'roomTypes',
                    url: '/roomTypes',
                    templateUrl: 'views/roomTypes.html',
                    controller: 'roomTypeCtrl'
                };

                var users = {
                    name: 'users',
                    url: '/users',
                    templateUrl: 'views/users.html',
                    controller: 'userCtrl'
                };

                var addCustomer = {
                    name: 'addCustomer',
                    url: '/addCustomer',
                    params: {
                        newReservationData: {
                            id: null,
                            roomName: null,
                            from: null,
                            to: null,
                            totalPrice: null
                        }
                    },
                    templateUrl: 'views/addCustomer.html',
                    controller: 'addCustomerCtrl'
                };

                $stateProvider.state(main);
                $stateProvider.state(addCustomer);
                $stateProvider.state(addPayment);
                $stateProvider.state(addReservation);
                $stateProvider.state(customers);
                $stateProvider.state(login);
                $stateProvider.state(payments);
                $stateProvider.state(reservations);
                $stateProvider.state(rooms);
                $stateProvider.state(availability);
                $stateProvider.state(prices);
                $stateProvider.state(roomTypes);
                $stateProvider.state(users);

            }]);
})();