var signup = angular.module("signup", []);

signup.controller('signupCtrl',['$scope','$http',function ($scope,$http) {
	$scope.signup = function() {
		this.upload = {
			type:this.inputType,
			email:this.inputEmail,
			password:this.inputPassword,
			name:this.inputName,
			sex:this.inputSex
		};
		$http.post('/api/myusers',this.upload)
		.success(function(data){
			window.location = '/login.html';
		})
		.error(function(){
			alert("注册失败");
		});
	}
}]);