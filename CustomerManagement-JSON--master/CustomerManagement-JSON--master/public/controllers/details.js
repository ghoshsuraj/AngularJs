	app.controller("detailsController",['$scope','$routeParams',function($scope,$routeParams){
		var details,details2;
			  details = window.localStorage['abhi'];
			  details2  = JSON.parse(details);
			  $scope.customerDetails  = details2;
			  $scope.customerID = $routeParams.customerID;
			
	}]);