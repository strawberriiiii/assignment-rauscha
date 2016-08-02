angular.module('employeApp', ['employeApp.MainController', 'ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		controller : 'MainCtrl',
		templateUrl : 'views/employeView.html'
	});
}]);