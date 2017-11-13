 app.controller("logoutController",function($rootScope,$location){
	window.localStorage['status']= false;
	$rootScope.loginStyle="css/logout";
	var picId = angular.element(document.querySelector("#homeDirectPic"));
	var textId = angular.element(document.querySelector("#homeDirectText"));
	picId.attr('href','#');
	textId.attr('href','#');
	$rootScope.loginStyle="css/logout";
	$location.path('/login');
});
 