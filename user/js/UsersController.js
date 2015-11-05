app.controller('UsersController', function($scope, $location, $http, sessionFactory, Flash) {
	sessionFactory.checkSession().then(function(data){
        if (data) {
            $location.path("/profile");

        } else{
            $scope.pageClass = 'page-home';
            $scope.login = function() { 
                $http({
                    method: 'POST',
                    url: 'http://localhost/btcwebstore/api/v1/user/login',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    transformRequest: function(obj) {
                        var str = [];
                        for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    },
                    data: {username: $scope.username, password: $scope.password}
                }).success(function(response){
                    if(!response.records.message){
                        var message = '<strong>Welcome!</strong> to BTC Webstore!';
                        Flash.create('success', message);
                        $location.path("/profile");
                    }else{
                        var message = '<strong>Error!</strong> Invalid username or password!';
                        Flash.create('danger', message);
                    }
                });
            };
        };
    });
});


app.controller('profileController', function($scope, $location, $rootScope, sessionFactory, Flash) {
    sessionFactory.checkSession().then(function(data){
        if (data) {
            $scope.logoff = function(){
                sessionFactory.logout();
                var message = '<strong>Success!</strong> You have successfully logged Out!';
                Flash.create('success', message);
                $location.path("/");  
            }
        } else{
            var message = '<strong>Error!</strong> Please Login First!';
            Flash.create('danger', message);
            $location.path("/");
        };
    });
    $scope.pageClass = 'page-about';
});

app.controller('contactController', function($scope, $location, $rootScope, sessionFactory, Flash) {
    sessionFactory.checkSession().then(function(data){
        if (data) {
            $scope.logoff = function(){
                sessionFactory.logout();
                var message = '<strong>Success!</strong> You have successfully logged Out!';
                Flash.create('success', message);
                $location.path("/");  
            }
        } else{
            var message = '<strong>Error!</strong> Please Login First!';
            Flash.create('danger', message);
            $location.path("/");
        };
    });

    $scope.pageClass = 'page-contact';
});


app.controller('dummyController', ['$scope','$location','Flash','customFlash', function($scope, $location, Flash, customFlash) {
	$scope.pageClass = 'page-dummy';

	$scope.success = function () {
        var message = '<strong>Well done!</strong> You successfully read this important alert message.';
        Flash.create('success', message);
        $location.path("/profile");
    };
}]);



// Demo controller

var myApp = angular.module('demoApp', ['flash', 'ngAnimate']);
myApp.controller('FlashDemoCtrl', ['$rootScope', '$scope', 'Flash', function ($rootScope, $scope, Flash) {
    $scope.success = function () {
        var message = '<strong>Well done!</strong> You successfully read this important alert message.';
        Flash.create('success', message);
    };
    $scope.info = function () {
        var message = '<strong>Heads up!</strong> This alert needs your attention, but it\'s not super important.';
        Flash.create('info', message);
    };
    $scope.warning = function () {
        var message = '<strong>Warning!</strong> Better check yourself, you\'re not looking too good.';
        Flash.create('warning', message);
    };
    $scope.danger = function () {
        var message = '<strong>Oh snap!</strong> Change a few things up and try submitting again.';
        Flash.create('danger', message);
    };
    $scope.pause = function () {
        Flash.pause();
    };
}]);


(function() {
    'use strict';
    var myApp = angular.module('flash', []);

    myApp.run(function($rootScope) {
        // initialize variables
        $rootScope.flash = {};
        $rootScope.flash.text = '';
        $rootScope.flash.type = '';
        $rootScope.flash.timeout = 5000;
        $rootScope.hasFlash = false;
    });

    // Directive for compiling dynamic html
    myApp.directive('dynamic', function($compile) {
        return {
            restrict: 'A',
            replace: true,
            link: function(scope, ele, attrs) {
                scope.$watch(attrs.dynamic, function(html) {
                    ele.html(html);
                    $compile(ele.contents())(scope);
                });
            }
        };
    });

    // Directive for closing the flash message
    myApp.directive('closeFlash', function($compile, Flash) {
        return {
            link: function(scope, ele) {
                ele.on('click', function() {
                    Flash.dismiss();
                });
            }
        };
    });

    // Create flashMessage directive
    myApp.directive('flashMessage', function($compile, $rootScope) {
        return {
            restrict: 'A',
            template: '<div role="alert" ng-show="hasFlash" class="alert {{flash.addClass}} alert-{{flash.type}} alert-dismissible ng-hide alertIn alertOut "> <span dynamic="flash.text"></span> <button type="button" class="close" close-flash><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button> </div>',
            link: function(scope, ele, attrs) {
                // get timeout value from directive attribute and set to flash timeout
                $rootScope.flash.timeout = parseInt(attrs.flashMessage, 10);
            }
        };
    });

    myApp.factory('Flash', ['$rootScope', '$timeout',
        function($rootScope, $timeout) {

            var dataFactory = {},
                timeOut;

            // Create flash message
            dataFactory.create = function(type, text, addClass) {
                var $this = this;
                $timeout.cancel(timeOut);
                $rootScope.flash.type = type;
                $rootScope.flash.text = text;
                $rootScope.flash.addClass = addClass;
                $timeout(function() {
                    $rootScope.hasFlash = true;
                }, 100);
                timeOut = $timeout(function() {
                    $this.dismiss();
                }, $rootScope.flash.timeout);
            };

            // Cancel flashmessage timeout function
            dataFactory.pause = function() {
                $timeout.cancel(timeOut);
            };

            // Dismiss flash message
            dataFactory.dismiss = function() {
                $timeout.cancel(timeOut);
                $timeout(function() {
                    $rootScope.hasFlash = false;
                });
            };
            return dataFactory;
        }
    ]);
}());