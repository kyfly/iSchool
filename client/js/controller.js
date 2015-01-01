function ChengjiCtrl ($scope,seva) {
	$scope.stulists = [
		{
			"name":"哈哈哈",
			"sno":"11111111"
		},
		{
			"name":"呵呵呵",
			"sno":"12434344"
		},
		{
			"name":"尤振飞",
			"sno":"16573456"
		},
		{
			"name":"马越",
			"sno":"12597377"
		},
		{
			"name":"王如锵",
			"sno":"12464883"
		}
	];
	$scope.courselists = [
		{
			"cno":"0",
			"name":"语文"
		},
		{
			"cno":"1",
			"name":"数学"
		},
		{
			"cno":"2",
			"name":"英语"
		},
		{
			"cno":"3",
			"name":"体育"
		},
		{
			"cno":"4",
			"name":"常识"
		},
		{
			"cno":"5",
			"name":"音乐"
		},
		{
			"cno":"6",
			"name":"美术"
		}
	];
	$scope.grades = [
		{
			"term":"一年级上期中",
			"course":"语文",
			"grade":"99"
		},
		{
			"term":"一年级下期末",
			"course":"数学",
			"grade":"21"
		},
		{
			"term":"二年级上期末",
			"course":"英语",
			"grade":"65"
		},
		{
			"term":"二年级下期中",
			"course":"体育",
			"grade":"76"
		},
		{
			"term":"三年级上期中",
			"course":"美术",
			"grade":"98"
		},
		{
			"term":"三年级下期中",
			"course":"音乐",
			"grade":"97"
		},
		{
			"term":"四年级上期末",
			"course":"语文",
			"grade":"66"
		},
		{
			"term":"四年级下期末",
			"course":"数学",
			"grade":"73"
		},
		{
			"term":"五年级上期中",
			"course":"音乐",
			"grade":"88"
		},
		{
			"term":"五年级下期末",
			"course":"美术",
			"grade":"100"
		},
		{
			"term":"六年级上期末",
			"course":"英语",
			"grade":"97"
		},
		{
			"term":"六年级下期末",
			"course":"语文",
			"grade":"87"
		}
	];
	$scope.isTeacher = function(){
		return seva.usi === 0;
	};
}

function ZuoyeCtrl ($scope,seva) {
	$scope.homeworks = [
		{
			"content":"今天没有作业！",
			"from":"某个老师",
			"datetime":"2014-06-06"
		},
		{
			"content":"今天没有作业！今天没有作业！今天没有作业！今天没有作业！",
			"from":"某个老师",
			"datetime":"2015-06-06"
		},
		{
			"content":"今天没有作业！今天没有作业！今天没有作业！",
			"from":"某个老师",
			"datetime":"2014-09-06"
		},
		{
			"content":"今天没有作业！今天没有作业！",
			"from":"某个老师",
			"datetime":"2014-07-06"
		}
	];
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

function JiazhanghuiCtrl ($scope,seva) {
	$scope.meetings = [
		{
			"content":"这是一个家长会",
			"time":"2014-09-01",
			"place":"六教",
			"agree":"18",
			"disagree":"21"
		},
		{
			"content":"这也是一个家长会",
			"time":"2014-09-02",
			"place":"七教",
			"agree":"39",
			"disagree":"0"
		},
		{
			"content":"这还是一个家长会",
			"time":"2014-09-03",
			"place":"一教",
			"agree":"28",
			"disagree":"11"
		},
	];
	$scope.isTeacher = function() {
		return seva.usi === 0;
	};	
	$scope.closeAlert = function(index) {
		$scope.meetings.splice(index, 1);
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
				"id":"sidebarJiazhanghui",
				"display_name":"家长会管理",
				"url":"#/jiazhanghui"
			},
			{
				"id":"sidebarHuodong",
				"display_name":"活动管理",
				"url":"#/huodong"
			},
			{
				"id":"sidebarZiliao",
				"display_name":"资料管理",
				"url":"#/ziliao"
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
				"id":"sidebarJiazhanghui",
				"display_name":"查看家长会",
				"url":"#/jiazhanghui"
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
				"id":"sidebarLiuyan",
				"display_name":"留言系统",
				"url":"#/liuyan"
			},
			{
				"id":"sidebarTongzhi",
				"display_name":"查看通知",
				"url":"#/tongzhi"
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
		.when('/jiazhanghui',{
			templateUrl:'/views/jiazhanghui.html',
			controller: JiazhanghuiCtrl,
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
		.otherwise({redirectTo: ''});
}