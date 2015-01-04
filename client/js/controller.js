function ChengjiCtrl ($scope,$resource,seva) {	
	var AllStudents = $resource(
		"/students",
		{
			access_token:"@access_token"
		}
	);
	var SingleStudent = $resource(
		"/students/:stuId",
		{
			stuId:"@id",
			access_token:"@access_token"
		}
	);
	var Subjects = $resource(
		"/teachers/:teaId/subjects",
		{
			teaId:"@id",
			access_token:"@access_token"
		}
	);
	var Grades = $resource(
		"/students/:stuId/grades",
		{
			stuId:"@id",
			access_token:"@access_token"
		},
		{
			"upload":{
				method:"POST",
				params:{
					score:"@score",
					id:"@objectid"
				}
			}
		}
	);
	$scope.scoreSubmit = function() {
		var postGrades = Grades.upload({
			id:this.nowSelectedSno,
			access_token:seva.access_token,
			data:{
				score:this.uploadScore,
				objectid:this.uploadObjectid
			}
		});
	};
	if (seva.usi === 0){
		$scope.stulists = AllStudents.query({
			access_token:seva.access_token
		});
		$scope.courselists = Subjects.query({
			id:seva.whoami,
			access_token:seva.access_token
		});
	}
	else if (seva.usi === 1){
		var SingleParent = $resource(
			"/parents/:parId/student",
			{
				parId:"@id",
				access_token:"@access_token"
			});
		var parent = SingleParent.get({
			id:whoami,
			access_token:seva.access_token
		});
		$scope.stulists = [SingleStudent.get({
			id:parent.id,
			access_token:seva.access_token
		})];
	}
	else {
		$scope.stulists = [SingleStudent.get({
			id:whoami,
			access_token:seva.access_token
		})];
	}
	$scope.grades = Grades.query({
		id:this.nowSelectedSno,
		access_token:seva.access_token
	});
	$scope.isTeacher = function(){
		return seva.usi === 0;
	};
}

function ZuoyeCtrl ($scope,seva) {
	var Homeworks = $resource(
		"/teachers/:teaId/homeworks",
		{
			teaId:"@id",
			access_token:"@access_token"
		}
	);
	var Teachers = $resource(
		"/teachers",
		{
			filter:{
				fields:{
					id:true
				}
			},
			access_token:"@access_token"
		}
	);
	var teachers = Teachers.query();
	$scope.homeworks = Homeworks.query({
		id: teachers[0].id,
		access_token:seva.access_token
	});
	$scope.homeworkSubmit = function () {
		var nowDate = Date();
		var postHomework = Homeworks.save({
			id: teachers[0].id,
			access_token:seva.access_token,
			data:{
				date:nowDate.toString(),
				content:this.uploadContent
			}
		});
	}
	$scope.isTeacher = function(){
		return seva.usi === 0;
	};
	$scope.closeAlert = function(index) {
		$scope.homeworks.splice(index, 1);
	};
}

function KechengbiaoCtrl ($scope,seva) {
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
		return seva.usi === 0;
	};

}

function HuodongCtrl ($scope,seva) {
	$scope.activities = [
		{
			"content":"这是一个活动！这是一个活动！这是一个活动！",
			"time":"2014-09-01",
			"place":"六教",
			"from":"马越",
			"datetime":"2014-03-01"
		},
		{
			"content":"这是一个活动！这是一个活动！",
			"time":"2014-01-01",
			"place":"七教",
			"from":"王如锵",
			"datetime":"2014-04-01"
		},
		{
			"content":"这是一个活动！",
			"time":"2014-03-01",
			"place":"学生活动中心",
			"from":"尤振飞",
			"datetime":"2014-02-01"
		},
		{
			"content":"这是一个活动！这是一个活动！这是一个活动！",
			"time":"2014-06-01",
			"place":"行政楼",
			"from":"啦啦啦",
			"datetime":"2014-12-01"
		},
		{
			"content":"这是一个活动！这是一个活动！",
			"time":"2014-05-01",
			"place":"体育馆",
			"from":"呵呵呵",
			"datetime":"2014-11-01"
		}
	];
	$scope.isTeacher = function(){
		return seva.usi === 0;
	};
	$scope.closeAlert = function(index) {
		$scope.activities.splice(index, 1);
	};
}

function ZiliaoCtrl ($scope,seva) {
	$scope.personinfos = [
		{
			"name":"哈哈",
			"sex":"男",
			"birthday":"1994-02-02",
			"job":"学生",
			"contact":"13666666666"
		},
		{
			"name":"呵呵",
			"sex":"女",
			"birthday":"1995-03-03",
			"job":"老师",
			"contact":"12345678910"
		},
		{
			"name":"啦啦",
			"sex":"女",
			"birthday":"1993-01-01",
			"job":"家长",
			"contact":"15444444444"
		},
		{
			"name":"呜呜",
			"sex":"男",
			"birthday":"1996-06-06",
			"job":"学生",
			"contact":"11111111111"
		},
	];
	$scope.isTeacher = function(){
		return seva.usi === 0;
	};
	$scope.closeAlert = function(index) {
		$scope.personinfos.splice(index, 1);
	};
}

function LiuyanCtrl ($scope,seva) {
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
		return seva.usi === 0;
	};
	$scope.closeAlert = function(index) {
		$scope.comments.splice(index, 1);
	};
}

function TongzhiCtrl ($scope,seva) {
	$scope.notices = [
		{
			"content":"这是一条通知！这是一条通知！这是一条通知！",
			"from":"马越",
			"datetime":"2014-03-01",
			"type":"info"
		},
		{
			"content":"这是一条通知！这是一条通知！",
			"from":"王如锵",
			"datetime":"2014-04-01",
			"type":"success"
		},
		{
			"content":"这是一条通知！",
			"from":"尤振飞",
			"datetime":"2014-02-01",
			"type":"warning"
		},
		{
			"content":"这是一条通知！这是一条通知！这是一条通知！",
			"from":"哈哈哈",
			"datetime":"2014-12-01",
			"type":"danger"
		},
		{
			"content":"这是一条通知！这是一条通知！",
			"from":"啦啦啦",
			"datetime":"2014-11-01",
			"type":"info"
		}
	];
	$scope.isTeacher = function(){
		return seva.usi === 0;
	};
	$scope.closeAlert = function(index) {
		$scope.notices.splice(index, 1);
	};
}

function SidebarCtrl($scope,seva,$window){
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
				"display_name":"资料管理",
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
	$scope.sidebars = sidebarResource[seva.usi];
	$scope.redirect = function(href) {
		$window.location.href = href;
	}

}

function NavbarCtrl($scope,seva){
	var role = ["教师","家长","学生"];
	$scope.user = {
		"name":"用户名",
		"role":role[seva.usi],
		"switchuser":function(){
			seva.usi++;
			if(seva.usi >= 3){
				seva.usi = 0;
			}
			$scope.user.role = role[seva.usi];
		}
	};
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