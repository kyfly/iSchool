var login = angular.module("login", ['ngCookies']);

login.controller('loginCtrl',['$scope','$http','$cookieStore', function ($scope,$http,$cookieStore) {
	$scope.login = function() {
		this.credentials = {
			email:this.inputEmail,
			password:this.inputPassword
		};
		$http.post('/api/myusers/login',this.credentials)
		.success(function(data){
			$cookieStore.put('accessToken',data.id);
			$cookieStore.put('userId',data.userId)
			window.location = '/index.html';
		})
		.error(function(){
			alert("登录失败");
		});
	}
	$scope.redirectToSignup = function () {
		window.location = '/signup.html';
	}
}]);