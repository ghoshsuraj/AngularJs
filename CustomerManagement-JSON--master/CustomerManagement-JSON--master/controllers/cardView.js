	app.controller("cardViewController",function($scope,$http,$rootScope,$location){
		var url ="json/customerDetails.json";
		var cust, cust1;
		$scope.start=0;
		$scope.end=10;
							
		if($rootScope.pageIndex == undefined)
		{
			$rootScope.pageIndex=1;							
		}							
							
		//Fetching Customer Details from json file... 
		if(window.localStorage['abhi']==undefined)
		{
			$http.get(url).success( function(response) {
				window.localStorage['abhi']=angular.toJson(response.cust_details);
				cust=window.localStorage['abhi'];
				cust1=JSON.parse(cust);
				$scope.customers=cust1;
				$scope.lastPage= Math.floor((($scope.customers.length-1)/10)+1); 
			});
		}
							 
		else
		{
			cust=window.localStorage['abhi'];
			cust1=JSON.parse(cust);
			$scope.customers=cust1;
			$scope.lastPage= Math.floor((($scope.customers.length-1)/10)+1); 
		}
								
		//Pagination...
		$scope.navigate =  function(pageIndex){
			$rootScope.pageIndex=pageIndex;
		};	
							
		$scope.$watch('pageIndex', function(newValue, oldValue) {
			if(newValue==-1)
			{
				if(oldValue==1)
					newValue=oldValue;
				else
					newValue=oldValue-1;
			}
														
			if(newValue==-2)
			{
				if(oldValue == $scope.lastPage)
					newValue=oldValue;									
				else
					newValue=oldValue+1;
			}	
														
			$scope.start=(newValue-1)*10;
			$scope.end=(newValue)*10;
			$rootScope.pageIndex = newValue;
		});
								
		//Changing view for pagination
		var urlPath= $location.url();
		if(urlPath=="/customers/cardView")
		{
			$rootScope.viewStyle="css/cardView" ;
			$rootScope.pageView= "#/customers/cardView";
		}
								
		else
		if(urlPath=="/customers/listView")
		{
			$rootScope.pageView= "#/customers/listView";
			$rootScope.viewStyle="css/listView" ;
		}
										
		//Deleting the selected customer
		$scope.deleteCustomer=function(index){
			$scope.customers.splice((($scope.pageIndex-1)*10)+index, 1);
			window.localStorage['abhi']=angular.toJson($scope.customers);
			$scope.lastPage= Math.floor((($scope.customers.length-1)/10)+1);
			if($scope.customers.length%10==0)
			{
				$rootScope.pageIndex=$scope.lastPage;
				if($location.url() == "/customers/cardView")
					$location.path('/customers/cardView'); 
				else
					$location.path('/customers/listView'); 
			}
		};
							
		//Sending the selected customer details to editCustomer.js for editing
		$scope.editCustomer = function(customer,index)
		{
			$rootScope.customer=customer;
			$rootScope.index=index;
			$location.path('/customers/editCustomer');
		};
								
		//searching the customer's name and address
		$scope.$watch('search', function(newValue, oldValue) {
			if(newValue!=undefined)
			{
				$scope.start=0;
				$scope.end  = $scope.customers.length;
			}
		});
	});
							
							
			