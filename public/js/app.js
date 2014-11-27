var app = angular.module("app", ['ngAnimate','ngRoute'])

app.config(["$routeProvider", PageLoader]);
app.value("seva",{
	"usi":0
	});
app.controller("SidebarCtrl", ["$scope", "seva", SidebarCtrl]);
app.controller("NavbarCtrl", ["$scope", "seva", NavbarCtrl]);