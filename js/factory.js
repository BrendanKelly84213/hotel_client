(function () {
    'use strict';

    var app = angular.module('app')
        .factory('dataFactory', ['$http', function ($http) {

            var urlBase = 'http://192.168.0.227:8080';
            var urlBaseCustomers = urlBase + '/api/customers';
            var urlBaseRoom = urlBase + '/api/rooms';
            var urlBasePrice = urlBase + '/api/prices';
            var urlBaseReservation = urlBase + '/api/reservations';

            var dataFactory = {};

            // CUSTOMERS
            dataFactory.getCustomers = function () {
                return $http.get(urlBaseCustomers);
            };
            dataFactory.getCustomer = function (id) {
                return $http.get(urlBaseCustomers + '/' + id);
            };
            dataFactory.addCustomer = function (customer) {
                return $http.post(urlBaseCustomers, customer);
            };
            dataFactory.editCustomer = function (customer) {
                return $http.post(urlBaseCustomers, customer);
            };
            dataFactory.deleteCustomer = function (id) {
                return $http.delete(urlBaseCustomers + '/' + id);
            };

            // ROOMS
            dataFactory.getRooms = function () {
                return $http.get(urlBaseRoom);
            };
            dataFactory.getRoom = function (id) {
                return $http.get(urlBaseRoom + '/' + id);
            };
            dataFactory.addRoom = function (room) {
                return $http.post(urlBaseRoom, room);
            };
            dataFactory.editRoom = function (room) {
                return $http.post(urlBaseRoom, room);
            };
            dataFactory.deleteRoom = function (id) {
                return $http.delete(urlBaseRoom + '/' + id);
            };

            return dataFactory;

        }]);

})();