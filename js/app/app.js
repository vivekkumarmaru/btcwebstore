var app = angular.module('myApp', ['flash','ngRoute', 'ngAnimate']);

app.constant('AppConfig', {
    appName: 'BTC Webstore',
    appVersion: 2.0,
    apiUrl: 'demo/url'
});


app.run(function($rootScope) {
        $rootScope.globalFoo = function() {
            alert("I'm global foo!");
        };
    });

app.factory("customFlash", function($rootScope) {
  	var queue = [];
  	var currentMessage = "";

  	$rootScope.$on("$routeChangeSuccess", function() {
    	currentMessage = queue.shift() || "";
  	});

  	return {
    	setMessage: function(message) { alert("setMessage function");
      		queue.push(message);
    	},
    	getMessage: function() {
      		return currentMessage;
    	}
  	};
});

app.config(function($routeProvider) {
    $routeProvider
    	.when('/', {
    		templateUrl: 'login.html',
            controller: 'UsersController'
    	})
    	.when('/profile', {
    		templateUrl: 'profile.html',
            controller: 'profileController'
    	})
    	.when('/contact', {
    		templateUrl: 'contact.html',
            controller: 'contactController'
    	})
    	.when('/dummy', {
    		templateUrl: 'dummy.html',
            controller: 'dummyController'
    	});

});

