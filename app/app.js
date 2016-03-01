var login_template=angular.module('login_template', ['ngRoute']);
login_template.controller('loginController',loginController);

login_template.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/login", { templateUrl: "view/login.html", controller : "loginController"})
      .when("/home", { templateUrl: "view/home.html", controller : "partialViewController"})
      .otherwise( {redirectTo: '/login'});
  }]);

//Below code has used for email validation through "validate-email" attribute
//login_template.directive('validateEmail', function() {
//	  var EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
//	  return {
//	    link: function(scope, elm) {
//	      elm.on("keyup",function(){
//	            var isMatchRegex = EMAIL_REGEXP.test(elm.val());
//	            if( isMatchRegex&& elm.hasClass('warning') || elm.val() == ''){
//	              elm.removeClass('warning');
//	            }else if(isMatchRegex == false && !elm.hasClass('warning')){
//	              elm.addClass('warning');
//	            }
//	      });
//	    }
//	  }
//	});

function loginController($scope, $location, $http){
	$scope.user='';
	$scope.user.username='';
	$scope.user.password='';
	$scope.loginError=false;
	$scope.validateEmail=function(email){
		var EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
		if(!EMAIL_REGEXP.test(email)){
			return false;
		}
		else{
			return true;
		}
	}
	$scope.submit = function(pathurl){
			if($scope.validateEmail($scope.user.username)){
				$http.get('http://localhost:8080/login_template/data/user.json')
				.success(function(data){
					if($scope.user.username==data.user.username && $scope.user.password==data.user.password)
		        	{
		        	 //console.log($scope.user);
					 $location.path(pathurl);
					 //$rootScope.loggedInUser = $scope.user.username;
					 //$cookieStore.put('userId',$scope.user.username);
		        	}
					else
		        	{
		        		$scope.loginError=true;
		        		$scope.errorMessage="Username or Password is Invalid";
		        	}
				})
				.error(function(data, status){
					$scope.errorMessage="Not able to connect with the server, please try again";
				});
			}
			else{
				$scope.loginError=true;
				$scope.errorMessage="Please enter valid format of username"
			}
		}
	
};