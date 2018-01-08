(function () {
    'use strict';

    var app = angular
        .module('app');

    app.controller('priceCtrl', priceCtrl);

    priceCtrl.$inject = ['$scope', 'dataFactory', '$state'];

    function priceCtrl($scope, dataFactory, $state) {
        validateState();

        function validateState() {
            if ($state.params.id == null || $state.params.name == null){
                $state.go('rooms');
            }
            else {
                $scope.roomInfo = {
                    id: $state.params.id,
                    name: $state.params.name
                };
            }
        }

        var data = {
            id: $state.params.id,
            name: $state.params.name
        };

        $scope.roomInfo = data;

        $scope.searchPrices = function (from, to) {
            var epochFrom = new Date(from).valueOf();
            var epochTo = new Date(to).valueOf();
            dataFactory.getPrices(data.id, epochFrom, epochTo)
                .then(function (response) {
                    console.log(response.data);
                    $scope.prices = response.data;
                }, function (error) {
                    console.log('Unable to get prices for room ' + data.id);
                })
        };



        $scope.addPrice = function (from, to, value) {
            var dto = {
                "value": value,
                "since": from,
                "upTo": to,
                "room": {
                    "id": data.id
                }
            };
            console.log(dto);
            dataFactory.addPrice(dto)
                .then(function (response) {
                    $scope.message = "Price added successfully.";
                    $('#modalHeader').addClass('bg-success').removeClass('bg-danger');
                    $('#modal').modal('show');
                    $('#addPrice').collapse('hide');
                    $('#fromInput').val('');
                    $('#toInput').val('');
                    $('#amountInput').val('');
                }, function (error) {
                    $scope.message = "Error - failed to add room type.";
                    $('#modalHeader').addClass('bg-danger').removeClass('bg-success');
                    $('#modal').modal('show');
                    console.log('Unable to add price! :');
                });
        };




        $('#searchBtn').click(function () {
            if($('#addPrice').hasClass('show'))
                $('#addPrice').collapse('hide');
        });

        $('#addBtn').click(function () {
            if($('#searchPrice').hasClass('show'))
                $('#searchPrice').collapse('hide');
        });

    }

})();