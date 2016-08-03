angular.module('employeApp.MainController', [])
.controller('MainCtrl', function($scope, localStorageService) {
	
	// VARIABLES
	$scope.addEmploye = "Add Employe";
	$scope.listTitle = "List of Employes";
	$scope.infoText = "You do not have any employe in the list!";
	$scope.infoText2 = "Add an employe now";
	$scope.deleteTitle = "Delete Employe";
	$scope.searchLabel = "Filter after last name";
	$scope.search = "";
	
	$scope.addTitle = "Add Employe to Directory";
	$scope.lastname = "Last name";
	$scope.firstname = "First name";
	$scope.birthdate = "Birthdate";
	$scope.gender = "Gender";
	$scope.male = "Male";
	$scope.female = "Female";
	$scope.pID = "Personal number";
	$scope.email = "Email address";
	$scope.cancel = "Cancel adding process";
	$scope.save = "Save employe";
	
	// METHODS
	
	/**
	 * Saves the employe in the array employes
 	 * @param {Object} employe
	 */
	$scope.saveEmploye = function(employe) {
		employe.birthdate = $scope.dt;
		if ($scope.employeList == null) {
			$scope.employeList = [];
			$scope.employeList.push(employe);
		} else {
			$scope.employeList.push(employe);
		}
		localStorageService.set('employeList', $scope.employeList);
		$scope.updateDatePicker();
		$scope.goBack();
	};
	
	/**
	 * Returns the stated employe
 	 * @param pID personal number of employe
	 */
	$scope.getEmploye = function(pID) {
		for (person in $scope.employeList) {
			if (pID == $scope.employeList[person].pID) {
				return $scope.employeList[person];
			}
		}
		return null;
	};
	
	/**
	 * Deletes the stated employe from the array employes
 	 * @param {Object} employe
	 */
	$scope.deleteEmploye = function(employe) {
		var task = confirm("Do you really want to delete the employe?");
		if (task) {
			for (person in $scope.employeList) {
				if (employe.pID == $scope.employeList[person].pID) {
					$scope.employeList.splice(person, 1);
					localStorageService.set('employeList', $scope.employeList);
				}
			}
		}		
	};
	
	/**
	 * Returns true, if the list of employes is empty
	 */
	$scope.isEmployeListEmpty = function() {
		if ($scope.employeList.length == 0 && localStorageService.length == 0) {
			return true;
		}
		return false;
	};
	
	/**
	 * Changes to the main view of the application
	 */
	$scope.goBack = function() {
		document.location.href = "#";
	};
	
	/**
 	 * Datepicker
 	 */
 	$scope.dt = new Date();
 	
 	$scope.inlineOptions = {
    	minDate: new Date(),
    	showWeeks: true
  	};
  	
 	$scope.dateOptions = {
	    formatYear: 'yy',
	    maxDate: new Date(2020, 5, 22),
	    minDate: new Date(1900, 1, 1),
	    startingDay: 1
  	};
  	
  	$scope.popupDay = {
    	opened: false
  	};

	$scope.open = function(nr) {
		if (nr == null) {
    		$scope.popupDay.opened = true;
    	} else {
    		$scope.popupArray[nr].opened = true;
    	}
  	};
  	
  	$scope.updateDatePicker = function() {
  		$scope.dt = new Date();
  	};
  	
  	$scope.updateDatePicker();
  	
  	$scope.getEmployeList = function() {
  		if (localStorageService.length() == 0) {
  			localStorageService.set('employeList', null);
  			return localStorageService.get('employeList');
  		}
  		return localStorageService.get('employeList');
  	};
  	
  	$scope.employeList = $scope.getEmployeList();
  	
  	/**
  	 * Returns a list of filtered employes
  	 */
  	$scope.getSearchedList = function() {
  		var array = [];
  		for (person in $scope.employeList) {
  			if ($scope.employeList[person].lastname.substr(0, $scope.search.length) == $scope.search) {
  				array.push($scope.employeList[person]);
  			}
  		}
  		return array;
  	};
	
});

