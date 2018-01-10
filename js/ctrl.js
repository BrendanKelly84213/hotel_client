(function () {
    'use strict';

    var app = angular
        .module('app', ['ui.router',
            'ui.bootstrap',
            'ngAnimate'
        ]);


    app.controller('ctrl', ctrl);

    ctrl.$inject = ['$scope', '$state', '$timeout', '$location', '$window'];

    function ctrl($scope, $state, $timeout, $location, $window) {
        redirectIfLoggedOut();
        $scope.welcomeMsg = 'Welcome to hotel app. Use the menu above to nagivate.';
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });

        function redirectIfLoggedOut() {
            //console.log('sprawdzam czy zalogowany');
            var username = $window.localStorage.getItem('user');
            if (typeof username === 'undefined' || username === null){
                $timeout(function(){
                    $scope.logout();
                });
                return false;
            }
            else if($location.path() != "/login") {
                //console.log('zalogowany jako ' + username);
                $scope.isLoggedIn = true;
                return true;
            }
        }


        $scope.isLoggedIn = function () {
            console.log($window.localStorage.getItem('user'));
            return redirectIfLoggedOut();
        };

        $scope.logout = function () {
            $window.localStorage.removeItem('user');
            $scope.isLoggedIn = false;
            $state.go('login');
        };

        //checks if user is logged in on url change
        $(window).on('hashchange', function (e) {
            redirectIfLoggedOut();
        });

        $scope.isAdministrator = function () {
            return $window.localStorage.getItem('roleName') === 'ROLE_ADMINISTRATOR';
        };

        $scope.showManagement = function () {
            console.log('dadadad11;');
            return $window.localStorage.getItem('roleName') === 'ROLE_ADMINISTRATOR' ||
                $window.localStorage.getItem('roleName') === 'ROLE_MANAGER';
        };

    }

})();