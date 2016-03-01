var login_template=angular.module('login_template', ['ngRoute']);
login_template.controller('loginController',loginController);

login_template.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/login", { templateUrl: "view/login.html", controller : "loginController"})
      .when("/home", { templateUrl: "view/home.html", controller : "partialViewController"})
      .otherwise( {redirectTo: '/login'});
  }]);

login_template.directive('validateEmail', function() {
	  var EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
	  return {
	    link: function(scope, elm) {
	      elm.on("keyup",function(){
	            var isMatchRegex = EMAIL_REGEXP.test(elm.val());
	            if( isMatchRegex&& elm.hasClass('warning') || elm.val() == ''){
	              elm.removeClass('warning');
	            }else if(isMatchRegex == false && !elm.hasClass('warning')){
	              elm.addClass('warning');
	            }
	      });
	    }
	  }
	});

function loginController($scope, $location, $http){
	$scope.user='';
	$scope.user.username='';
	$scope.user.password='';
	$scope.email = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
	$scope.loginError=false;
	$scope.submit = function(pathurl){
<<<<<<< HEAD
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
	        		//alert("wrong username or password");
	        	}
			})
			.error(function(data, status){
				$scope.errormessage="User list is not available";
			});
=======
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
>>>>>>> 69abc16b1c735a50063c25fcaa1fada9306f73d9
		}
	
};
