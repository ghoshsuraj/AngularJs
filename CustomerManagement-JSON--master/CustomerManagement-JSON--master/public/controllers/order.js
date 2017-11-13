app.controller("orderController", function($scope,$rootScope,$http){
	var cust, cust1;
	$rootScope.viewStyle="css/order";	
	cust=window.localStorage['abhi'];
	cust1=JSON.parse(cust);
	$scope.orders=cust1;

	$scope.byName = function(order){
		var name = order.firstName + " " + order.lastName;
		if($scope.searchName == undefined)
		{
			return true;
		}
		
		else
		{
			if(name.toLowerCase().indexOf($scope.searchName.toLowerCase())!=-1)
			{
				return true;
			}
		}
		return false;
	};
});

