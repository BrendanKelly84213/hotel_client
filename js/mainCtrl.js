(function () {
    'use strict';

    var app = angular
        .module('app');

    app.controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['$scope', 'dataFactory', '$location'];

    function mainCtrl($scope, dataFactory, $location) {

        if ($scope.$parent.loggedUser === undefined) {
            $location.path("/login");
        }
    }

})();