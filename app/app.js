var login_template=angular.module('login_template', ['ngRoute']);
login_template.controller('loginController',loginController);

login_template.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/login", { templateUrl: "view/login.html", controller : "loginController"})
      .when("/home", { templateUrl: "view/home.html", controller : "partialViewController"})
      .otherwise( {redirectTo: '/login'});
  }]);

function loginController($scope, $location){
	$scope.user='';
	$scope.user.username='';
	$scope.user.password='';
	$scope.loginError=false;
	$scope.submit = function(pathurl){
			if($scope.user.username=="sample" && $scope.user.password=="sample")
        	{
        	 //console.log($scope.user);
			 $location.path(pathurl);
        	}
			else
        	{
        		$scope.loginError=true;
        		//alert("wrong username or password");
        	}
		}
	
};
