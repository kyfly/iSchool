function ChengjiCtrl ($scope,$resource,$cookieStore) {	
	var AllStudents = $resource(
		"/api/students",
		{
			access_token:"@access_token"
		}
	);
	var SingleStudent = $resource(
		"/api/students/:stuId",
		{
			stuId:"@id",
			access_token:"@access_token"
		}
	);
	var Grades = $resource(
		"/api/students/:stuId/grades",
		{
			stuId:"@id",
			access_token:"@access_token"
		},
		{
			"upload":{
				method:"POST",
				params:{
					grade:"@grade"
				}
			}
		}
	);
	$scope.gradeSubmit = function() {
		var postGrades = Grades.upload({
			id:this.nowSelectedSno,
			access_token:$cookieStore.get('access_token'),
			data:{
				grade:this.uploadGrade,
			}
		});
	};
	if ($cookieStore.get('userType') === 0){
		$scope.stulists = AllStudents.query({
			access_token:$cookieStore.get('access_token')
		});
		$scope.courselists = [
			"语文","数学","英语","科学","音乐","美术"
		];
	}
	else if ($cookieStore.get('userType') === 1){
		var SingleParent = $resource(
			"/api/parents/:parId/student",
			{
				parId:"@id",
				access_token:"@access_token"
			});
		var parent = SingleParent.get({
			id:whoami,
			access_token:$cookieStore.get('access_token')
		});
		$scope.stulists = [SingleStudent.get({
			id:parent.id,
			access_token:$cookieStore.get('access_token')
		})];
	}
	else {
		$scope.stulists = [SingleStudent.get({
			id:whoami,
			access_token:$cookieStore.get('access_token')
		})];
	}
	$scope.grades = Grades.query({
		id:this.nowSelectedSno,
		access_token:$cookieStore.get('access_token')
	});
	$scope.isTeacher = function(){
		return $cookieStore.get('userType') === 0;
	};
}

function ZuoyeCtrl ($scope,$resource,$cookieStore) {
	var Homeworks = $resource(
		"/api/teachers/:id/homeworks",
		{
			id:$cookieStore.get("detailId"),
			access_token:$cookieStore.get('access_token')
		}
	);
	$scope.homeworks = Homeworks.query();
	$scope.homeworkSubmit = function () {
		var nowDate = new Date();
		var postHomework = Homeworks.save({
			date:nowDate.toISOString(),
			content:this.uploadContent
		});
		this.homeworks.push({
			date:nowDate.toISOString(),
			content:this.uploadContent
		});
	}
	$scope.isTeacher = function(){
		return $cookieStore.get('userType') === 0;
	};
	$scope.closeAlert = function(index) {
		$scope.homeworks.splice(index, 1);
	};
}

function KechengbiaoCtrl ($scope,$cookieStore) {
	$scope.courses = [
		{
			"mon":"语文",
			"tue":"数学",
			"wed":"英语",
			"thur":"体育",
			"fri":"常识",
			"sat":"音乐",
			"sun":"美术"
		},
		{
			"mon":"语文",
			"tue":"数学",
			"wed":"英语",
			"thur":"体育",
			"fri":"常识",
			"sat":"音乐",
			"sun":"美术"
		},
		{
			"mon":"语文",
			"tue":"数学",
			"wed":"英语",
			"thur":"体育",
			"fri":"常识",
			"sat":"音乐",
			"sun":"美术"
		},
		{
			"mon":"语文",
			"tue":"数学",
			"wed":"英语",
			"thur":"体育",
			"fri":"常识",
			"sat":"音乐",
			"sun":"美术"
		},
		{
			"mon":"语文",
			"tue":"数学",
			"wed":"英语",
			"thur":"体育",
			"fri":"常识",
			"sat":"音乐",
			"sun":"美术"
		},
		{
			"mon":"语文",
			"tue":"数学",
			"wed":"英语",
			"thur":"体育",
			"fri":"常识",
			"sat":"音乐",
			"sun":"美术"
		},
		{
			"mon":"语文",
			"tue":"数学",
			"wed":"英语",
			"thur":"体育",
			"fri":"常识",
			"sat":"音乐",
			"sun":"美术"
		},
		{
			"mon":"语文",
			"tue":"数学",
			"wed":"英语",
			"thur":"体育",
			"fri":"常识",
			"sat":"音乐",
			"sun":"美术"
		}
	];
	$scope.isTeacher = function(){
		return $cookieStore.get('userType') === 0;
	};

}

function HuodongCtrl ($scope,$resource,$cookieStore) {
	var Activities = $resource(
		"/api/teachers/:id/activities",
		{
			id:$cookieStore.get("detailId"),
			access_token:$cookieStore.get('access_token')
		}
	);
	$scope.activities = Activities.query();
	$scope.activitySubmit = function () {
		var postActivity = Activities.save({
			date:this.inputDate,
			place:this.inputPlace,
			content:this.inputContent
		});
		this.activities.push({
			date:this.inputDate,
			place:this.inputPlace,
			content:this.inputContent
		});
	}
	$scope.isTeacher = function(){
		var nowType = $cookieStore.get('userType');
		return nowType === 0 || nowType === 1;
	};
	$scope.closeAlert = function(index) {
		$scope.activities.splice(index, 1);
	};
}

function ZiliaoCtrl ($scope,$resource,$cookieStore) {
	var Profiles = $resource(
		"/api/myusers/:id",
		{
			id:$cookieStore.get('userId'),
			access_token:$cookieStore.get('access_token')
		},
		{
			update:{
				method:'PUT',
				success:function(){
					alert("成功！");
				},
				error:function(){
					alert("失败！");
				}
			}
		}
	);
	$scope.profiles = Profiles.get();
	$scope.updateProfile = function () {
		var updatePf = Profiles.update({
			sex:this.profiles.sex,
			name:this.profiles.name,
			email:this.profiles.email
		});
	}
}

function LiuyanCtrl ($scope,$cookieStore) {
	
	$scope.comments = [
		{
			"from":"马越",
			"to":"啦啦啦",
			"datetime":"2014-11-14 11:56",
			"content":"老师你好啊！",
		},
		{
			"from":"尤振飞",
			"to":"呵呵呵",
			"datetime":"2014-11-13 10:09",
			"content":"老师我叫尤振飞！",
		},
		{
			"from":"哈哈",
			"to":"呵呵",
			"datetime":"0000-00-00 00:00",
			"content":"好好对我很好但却无法后期！",
		},
		{
			"from":"猫猫",
			"to":"狗狗",
			"datetime":"2333-33-33 33:33",
			"content":"何其芳未公布哦符合无法被解放军阿福~",
		}
	];
	$scope.isTeacher = function(){
		return $cookieStore.get('userType') === 0;
	};
	$scope.closeAlert = function(index) {
		$scope.comments.splice(index, 1);
	};
}

function TongzhiCtrl ($scope,$resource,$cookieStore) {
	var Notices = $resource(
		"/api/teachers/:id/notices",
		{
			id:$cookieStore.get("detailId"),
			access_token:$cookieStore.get('access_token')
		}
	);
	$scope.notices = Notices.query();
	$scope.noticeSubmit = function () {
		var nowDate = new Date();
		var postNotices = Notices.save({
			date:nowDate.toISOString(),
			content:this.inputContent
		});
		this.notices.push({
			date:nowDate.toISOString(),
			content:this.inputContent
		});
	}
	$scope.isTeacher = function(){
		return $cookieStore.get('userType') === 0;
	};
	$scope.closeAlert = function(index) {
		$scope.notices.splice(index, 1);
	};
}

function SidebarCtrl($scope,$cookieStore,$window){
	var sidebarResource = [
		//教师边栏
		[
			{
				"id":"sidebarChengji",
				"display_name":"成绩管理",
				"url":"#/chengji"
			},
			{
				"id":"sidebarZuoye",
				"display_name":"作业管理",
				"url":"#/zuoye"
			},
			{
				"id":"sidebarKechengbiao",
				"display_name":"课程表管理",
				"url":"#/kechengbiao",
			},
			{
				"id":"sidebarHuodong",
				"display_name":"活动管理",
				"url":"#/huodong"
			},
			{
				"id":"sidebarLiuyan",
				"display_name":"留言系统",
				"url":"#/liuyan"
			},
			{
				"id":"sidebarTongzhi",
				"display_name":"通知管理",
				"url":"#/tongzhi"
			},
			{
				"id":"sidebarZiliao",
				"display_name":"我的资料",
				"url":"#/ziliao"
			}
		],
		//家长边栏
		[
			{
				"id":"sidebarChengji",
				"display_name":"小孩成绩",
				"url":"#/chengji"
			},
			{
				"id":"sidebarZuoye",
				"display_name":"小孩作业",
				"url":"#/zuoye"
			},
			{
				"id":"sidebarKechengbiao",
				"display_name":"小孩课程表",
				"url":"#/kechengbiao",
			},
			{
				"id":"sidebarHuodong",
				"display_name":"查看活动",
				"url":"#/huodong"
			},
			{
				"id":"sidebarLiuyan",
				"display_name":"留言系统",
				"url":"#/liuyan"
			},
			{
				"id":"sidebarTongzhi",
				"display_name":"查看通知",
				"url":"#/tongzhi"
			},
			{
				"id":"sidebarZiliao",
				"display_name":"我的资料",
				"url":"#/ziliao"
			}
		],
		//学生边栏
		[
			{
				"id":"sidebarChengji",
				"display_name":"我的成绩",
				"url":"#/chengji"
			},
			{
				"id":"sidebarZuoye",
				"display_name":"我的作业",
				"url":"#/zuoye"
			},
			{
				"id":"sidebarKechengbiao",
				"display_name":"我的课程表",
				"url":"#/kechengbiao",
			},
			{
				"id":"sidebarHuodong",
				"display_name":"校园活动",
				"url":"#/huodong"
			},
			{
				"id":"sidebarTongzhi",
				"display_name":"查看通知",
				"url":"#/tongzhi"
			},
			{
				"id":"sidebarZiliao",
				"display_name":"我的资料",
				"url":"#/ziliao"
			}
		]
	];
	$scope.sidebars = sidebarResource[$cookieStore.get('userType')];
	$scope.redirect = function(href) {
		$window.location.href = href;
	}

}

function NavbarCtrl($scope,$cookieStore,$http){
	var role = ["教师","家长","学生"];
	$scope.user = {
		"name":$cookieStore.get('userName'),
		"role":role[$cookieStore.get('userType')]
	};
	$scope.logout = function(){
		$http.post("/api/myusers/logout?access_token="+$cookieStore.get('access_token'))
		.success(function(){
			$cookieStore.remove('userId');
			$cookieStore.remove('userType');
			$cookieStore.remove('userName');
			$cookieStore.remove('detailId');
			$cookieStore.remove('access_token');
			window.location = "/login.html";
		});
	}
}


function PageLoader($routeProvider){
	$routeProvider
		.when('/chengji',{
			templateUrl:'/views/chengji.html',
			controller: ChengjiCtrl,
		})
		.when('/zuoye',{
			templateUrl:'/views/zuoye.html',
			controller: ZuoyeCtrl,
		})
		.when('/kechengbiao',{
			templateUrl:'/views/kechengbiao.html',
			controller: KechengbiaoCtrl,
		})
		.when('/huodong',{
			templateUrl:'/views/huodong.html',
			controller: HuodongCtrl,
		})
		.when('/ziliao',{
			templateUrl:'/views/ziliao.html',
			controller: ZiliaoCtrl,
		})
		.when('/liuyan',{
			templateUrl: '/views/liuyan.html',
			controller: LiuyanCtrl,
		})
		.when('/tongzhi',{
			templateUrl:'/views/tongzhi.html',
			controller: TongzhiCtrl,
		})
		.otherwise({redirectTo: '/chengji'});
}