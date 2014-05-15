'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'myApp.controllers',
  'ngRoute'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/Home/Contact', { templateUrl: 'Views/Home/Angular.html', controller: 'MyCtrl1' });
       
        $routeProvider.otherwise({ redirectTo: '/Home/About' });
    }]);
