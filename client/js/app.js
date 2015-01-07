var app = angular.module("app", ['ui.bootstrap','ngAnimate','ngRoute','ngResource','ngCookies'])

app.config(["$routeProvider", PageLoader]);
app.value("seva",{
		"usi":0,
		"whoami":123456789
	});
app.controller("SidebarCtrl", ["$scope", "seva", "$window", SidebarCtrl]);
app.controller("NavbarCtrl", ["$scope", "seva", NavbarCtrl]);
