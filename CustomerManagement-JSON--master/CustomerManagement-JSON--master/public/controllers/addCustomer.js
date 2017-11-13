app.controller("addCustomerController",function($scope, $location,$rootScope){
	
	$scope.modify="Add";	
	$scope.button1="Add";
	$scope.button2="Cancel";
	$rootScope.viewStyle="css/addCustomer";
		
	//Adding new customer...
	$scope.modifyCustomer=function(){
		
		var cust, cust1,flag=0;
		$scope.flag2=false;
		
		$scope.newCustomer={
			"firstName":$scope.fname, 
			"lastName" : $scope.lname, 
			"gender":$scope.gender,
			"email" :  $scope.email,
			"address": $scope.address,
			"state" : $scope.state,
			"city" : $scope.city,
			"orders":"0",
			"pic":"images/"+$scope.gender+".png",
			"zip" :  $scope.zip
		};
		
		//form validation
		angular.forEach($scope.newCustomer, function(value, key){
			if(value == undefined || value=="")
			{	
				flag++;
				if(key=='email')
				$scope.flag2=true;
			}	
		});
	  	if(flag>1 || (flag==1 && $scope.flag2==false))
			{
				alert("Please fill empty fields!!");
		    } 
		else
		if($scope.flag2==false)
		{	
			cust=window.localStorage['abhi'];
			cust1=JSON.parse(cust);
			cust1.push($scope.newCustomer);	
			window.localStorage['abhi']=angular.toJson(cust1);
			$rootScope.pageIndex=Math.floor(((cust1.length-1)/10)+1);
			if($rootScope.pageView=="#/customers/cardView")
				$location.path('/customers/cardView'); 
			else
				$location.path('/customers/listView');
		}		
	};
	
	//cancel the customer addition
	$scope.truncCustomer=function(){
		if($rootScope.pageView=="#/customers/cardView")
			$location.path('/customers/cardView'); 
		else
			$location.path('/customers/listView');
	}; 
});
	 