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
        console.log('elo działa');
        $scope.test = 'elo';



    }

})();