var app = angular
				.module("myAngular",['ngRoute','ngStorage']);
	app.config(function($routeProvider){
					$routeProvider
						.when("/customers/cardView",{
							resolve : {
								"check": function($location){
									if(window.localStorage['status']== "false"){
										$location.path("/login");
									}
								}
							},
							templateUrl:"partial/cardView.html",
							controller:"cardViewController"
						})	
						.when("/customers/listView",{
							resolve : {
								"check": function($location){
									if(window.localStorage['status']== "false"){
										$location.path("/login");
									}
								}
							},
							templateUrl:"partial/cardView.html",
							controller:"cardViewController"
						})
						.when("/customers/addCustomer",{
							resolve : {
								"check": function($location){
									if(window.localStorage['status']== "false"){
										$location.path("/login");
									}
								}
							},
							templateUrl:"partial/addCustomer.html",
							controller:"addCustomerController"
						})
						.when("/customers/editCustomer",{
							resolve : {
								"check": function($location){
									if(window.localStorage['status']== "false"){
										$location.path("/login");
									}
								}
							},
							templateUrl:"partial/addCustomer.html",
							controller:"editCustomerController"
						})
						.when("/about",{
							resolve : {
								"check": function($location){
									if(window.localStorage['status']== "false"){
										$location.path("/login");
									}
								}
							},
							templateUrl:"partial/about.html",
							controller:"aboutController"
						})
						.when("/orders",{
							resolve : {
								"check": function($location){
									if(window.localStorage['status']== "false"){
										$location.path("/login");
									}
								}
							},
							templateUrl:"partial/order.html",
							controller:"orderController"
						})
						.when("/customers/details/:customerID",{
							resolve : {
								"check": function($location){
									if(window.localStorage['status']== "false"){
										$location.path("/login");
									}
								}
							},
							templateUrl:"partial/details.html",
							controller:"detailsController"
						})
						.when("/logout",{
							templateUrl:"partial/login.html",
							controller:"logoutController",
						})
						.otherwise({
							resolve : {
								"check": function($location){
									if(window.localStorage['status'] == "true"){
										$location.path("/customers/cardView");
									}
								}
							},
							redirectTo: "/login",
							templateUrl:"partial/login.html",
							controller:"loginController"
						})
                });
	