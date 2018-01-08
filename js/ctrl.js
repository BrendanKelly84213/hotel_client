(function () {
    'use strict';

    var app = angular
        .module('app', ['ui.router',
                        'ui.bootstrap',
                        'ngAnimate'
                        ]);


    app.controller('ctrl', ctrl);

    ctrl.$inject = ['$scope', '$state', '$timeout'];

    function ctrl($scope, $state, $timeout) {
        redirectIfLoggedOut();
        $scope.welcomeMsg = 'Welcome to hotel app. Use the menu above to nagivate.';
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });

        function redirectIfLoggedOut() {
            if (!(typeof $scope.loggedUser !== 'undefined')){
                console.log('jestes niezalogowany');
                $timeout(function(){
                    $state.go('login')
                });
            }
        }


        $scope.isLogged = function () {
            return typeof $scope.loggedUser !== 'undefined';
        };

        $scope.logout = function () {
            $scope.loggedUser = undefined;
            $state.go('login');
        }
    }

})();