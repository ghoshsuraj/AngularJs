app.controller("editCustomerController",function($scope, $rootScope,$location){
	$scope.modify="Edit";
	$scope.button1="Update";
	$scope.button2="Delete";
	
	//Showing data of selected customer in the form fields...
	$scope.fname=$rootScope.customer.firstName;
	$scope.lname=$rootScope.customer.lastName;
	$scope.gender=$rootScope.customer.gender;
	$scope.email=$rootScope.customer.email;
	$scope.address=$rootScope.customer.address;
	$scope.state=$rootScope.customer.state;
	$scope.city=$rootScope.customer.city;
	$scope.zip=$rootScope.customer.zip;
	$rootScope.viewStyle="css/editCustomer";
	
	//Updating the selected customer's Details...
	$scope.modifyCustomer=function()
	{
		var cust, cust1;
		$rootScope.customer.firstName=$scope.fname;
		$rootScope.customer.lastName=$scope.lname;
		$rootScope.customer.gender=$scope.gender;
		$rootScope.customer.email=$scope.email;
		$rootScope.customer.address=$scope.address;
		$rootScope.customer.state=$scope.state;
		$rootScope.customer.city=$scope.city;
		$rootScope.customer.pic = "images/"+$scope.gender+".png";
		$rootScope.customer.zip=$scope.zip;
		
		cust=window.localStorage['abhi'];
		cust1=JSON.parse(cust);
		cust1[($rootScope.pageIndex-1)*10+$rootScope.index] = $rootScope.customer;	
		window.localStorage['abhi']=angular.toJson(cust1);	
		if($rootScope.pageView=="#/customers/cardView")
			$location.path('/customers/cardView'); 
		else
			$location.path('/customers/listView');
	};
	
	//Deleting the Selected Customer...
	$scope.truncCustomer=function(){
		cust=window.localStorage['abhi'];
		cust1=JSON.parse(cust);
		
		angular.forEach(cust1, function(value, key) {
			if(angular.toJson(value)==angular.toJson($rootScope.customer))
			{
				cust1.splice(key,1);
			}
		}); 
		window.localStorage['abhi']=angular.toJson(cust1);	
		if($rootScope.pageView=="#/customers/cardView")
			$location.path('/customers/cardView'); 
		else
			$location.path('/customers/listView');
	}; 
});
