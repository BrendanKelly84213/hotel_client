(function () {
    'use strict';

    var app = angular.module('app')
        .factory('dataFactory', ['$http', function ($http) {

            var urlBase = 'http://192.168.0.227:8080';
            var urlBaseCustomers = urlBase + '/api/customers';
            var urlBaseRoom = urlBase + '/api/rooms';
            var urlBaseRoomTypes = urlBase + '/api/roomTypes';
            var urlBasePrice = urlBase + '/api/prices';
            var urlBaseReservation = urlBase + '/api/reservations';
            var urlBaseUsers = urlBase + '/api/users';

            var dataFactory = {};

            // CUSTOMERS
            dataFactory.searchCustomers = function(name, surname, cardNo) {
                var url = urlBaseCustomers + "?search=";

                if (name != null)
                    url += "name:" + name + ",";
                if (surname != null)
                    url += "surname:" + surname + ",";
                if (cardNo != null)
                    url += "idCardNumber:" + cardNo;

                return $http.get(url);
            };

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
            dataFactory.findByIdCardNumber = function (idCardNumber) {
                return $http.get(urlBaseCustomers + '/byIdCard/' + idCardNumber)
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

            // ROOM TYPES
            dataFactory.getRoomTypes = function () {
                return $http.get(urlBaseRoomTypes);
            };
            dataFactory.getRoomType = function (id) {
                return $http.get(urlBaseRoomTypes + '/' + id);
            };
            dataFactory.addRoomType = function (roomType) {
                return $http.post(urlBaseRoomTypes, roomType);
            };
            dataFactory.editRoomType = function (roomType) {
                return $http.post(urlBaseRoomTypes, roomType);
            };
            dataFactory.deleteRoomType = function (id) {
                return $http.delete(urlBaseRoomTypes + '/' + id);
            };

            // RESERVATIONS
            dataFactory.getReservations= function(){
                return $http.get(urlBaseReservation);
            };

            dataFactory.getReservation = function(id){
                return $http.get(urlBaseReservation + '/' +id);
            };

            dataFactory.addReservation = function (reservation) {
                return $http.post(urlBaseReservation, reservation);
            };
            dataFactory.editReservation = function (reservation) {
                return $http.post(urlBaseReservation, reservation);
            };
            dataFactory.deleteReservation = function (id) {
                return $http.delete(urlBaseReservation + '/' + id);
            };




            // AVAILABILITY
            dataFactory.getAvailability = function(since, to, roomType) {
                return $http({
                    url: urlBaseRoom + '/freeByRoomType',
                    method: 'GET',
                    params: {
                        'since': since,
                        'to': to,
                        'roomType': roomType
                    }
                });
            };

            // PRICES
            dataFactory.addPrice = function (price) {
                return $http.post(urlBasePrice, price);
            };

            dataFactory.getPrices = function (roomId, from, to) {
                return $http({
                    url: urlBasePrice + '/byRoomAndInterval',
                    method: 'GET',
                    params: {
                        'since': from,
                        'to': to,
                        'roomId': roomId
                    }
                });
            };

            // LOGIN

            dataFactory.login = function (loginDto) {
                return $http.post(urlBaseUsers + '/login', loginDto);
            };


            return dataFactory;

        }]);

})();