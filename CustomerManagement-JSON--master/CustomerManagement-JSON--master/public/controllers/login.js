	app.controller("loginController",function($scope,$http,$rootScope){
		window.localStorage['status'] = false;
		$rootScope.viewStyle="css/loginTab";
		var url="json/login.json";
		var loginData,loginData2;
		
		//Ajax Call to fetch data from json file...
		$http.get(url).success(function(response){
			window.localStorage['Login']= angular.toJson(response.loginDetails);
			  loginData = window.localStorage['Login'];
			  loginData2  = JSON.parse(loginData);
		});
			if(window.localStorage['status'] == "false"){
				$rootScope.loginStyle="css/logout";
			}
		
		//Credentials Authentication...
		$scope.authenticate = function(){
			var authId = angular.element(document.querySelector("#loginAnchor"));
			var picId = angular.element(document.querySelector("#loginDirectPic"));
			var textId = angular.element(document.querySelector("#loginDirectText"));
			
			if($scope.femail == undefined && $scope.fpassword == undefined){
				alert("Password and Email null");
				authId.attr('href','#/login');
				$rootScope.loginStyle="css/logout";
			}
			else{
				for(var i=0;i<5;i++){
					if($scope.femail == loginData2[i].email){
						if($scope.fpassword == loginData2[i].password){
							window.localStorage['status'] = true;
							authId.attr('href','#/customers/cardView');
							picId.attr('href','#/customers/cardView');
							textId.attr('href','#/customers/cardView');
							$rootScope.loginStyle="css/login";
							alert("Welcome !! "+loginData2[i].name)
							break;
						}
					}
				}
				if(window.localStorage['status'] == "false"){
					alert("please enter correct credential");
								authId.attr('href','#/login');
								picId.attr('href','#/login');
								textId.attr('href','#/login');
								$rootScope.loginStyle="css/logout";
				}
			}
		};
					
	});
	