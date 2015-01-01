var app = angular.module("app", ['ui.bootstrap','ngAnimate','ngRoute'])

app.config(["$routeProvider", PageLoader]);
app.value("seva",{
	"usi":0
	});
app.controller("SidebarCtrl", ["$scope", "seva", "$window", SidebarCtrl]);
app.controller("NavbarCtrl", ["$scope", "seva", NavbarCtrl]);