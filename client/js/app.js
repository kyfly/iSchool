var app = angular.module("app", ['ui.bootstrap','ngAnimate','ngRoute','ngResource'])

app.config(["$routeProvider", PageLoader]);
app.value("seva",{
		"usi":0,
		"whoami":123456789,
		"access_token":"whosyourdaddy"
	});
app.controller("SidebarCtrl", ["$scope", "seva", "$window", SidebarCtrl]);
app.controller("NavbarCtrl", ["$scope", "seva", NavbarCtrl]);
