var login = angular.module("login", ['ngCookies']);

login.controller('loginCtrl',['$scope','$http','$cookieStore', function ($scope,$http,$cookieStore) {
	$scope.login = function() {
		this.credentials = {
			email:this.inputEmail,
			password:this.inputPassword
		};
		$http.post('/api/myusers/login',this.credentials)
		.success(function(data){
			$cookieStore.put('access_token',data.id);
			$cookieStore.put('userId',data.userId);
			$http.get('/api/myusers/'+data.userId+'/?access_token='+data.id)
			.success(function(extradata){
				console.log(extradata);
				$cookieStore.put('userType',extradata.type);
				$cookieStore.put('userName',extradata.name);
				if (extradata.type === 0){
					$http.get('/api/teachers/?access_token='+data.id+'&filter=%7B%22where%22%3A%7B%22user_id%22%3A%22'+data.userId+'%22%7D%7D')
					.success(function(detaildata){
						console.log(detaildata);
						$cookieStore.put('detailId',detaildata[0].id);
					});
				}
				else if (extradata.type === 1){
					$http.get('/api/parents/?access_token='+data.id+'&filter=%7B%22where%22%3A%7B%22user_id%22%3A%22'+data.userId+'%22%7D%7D')
					.success(function(detaildata){
						$cookieStore.put('detailId',detaildata[0].id);
					});
				}
				else if (extradata.type === 2){
					$http.get('/api/students/?access_token='+data.id+'&filter=%7B%22where%22%3A%7B%22user_id%22%3A%22'+data.userId+'%22%7D%7D')
					.success(function(detaildata){
						$cookieStore.put('detailId',detaildata[0].id);
					});
				}
				window.location = '/index.html';
			})
			.error(function(){
				alert("登录失败");
			});
		})
	}
	$scope.redirectToSignup = function () {
		window.location = '/signup.html';
	}
}]);