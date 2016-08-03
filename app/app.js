angular.module('employeApp', ['employeApp.MainController', 'ngRoute', 'ngAnimate', 'ui.bootstrap', 'LocalStorageModule'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		controller : 'MainCtrl',
		templateUrl : 'views/employeView.html'
	}).when('/addEmploye', {
		controller : 'MainCtrl',
		templateUrl : 'views/addEmployeView.html'
	});
}]);