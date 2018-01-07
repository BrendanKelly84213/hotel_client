(function () {
    'use strict';

    var app = angular
        .module('app', ['ui.router',
                        'ui.bootstrap',
                        'ngAnimate'
                        ]);


    app.controller('ctrl', ctrl);

    ctrl.$inject = ['$scope', 'dataFactory'];

    function ctrl($scope) {
        $scope.welcomeMsg = 'Welcome to hotel app. Use the menu above to nagivate.';

    }

})();