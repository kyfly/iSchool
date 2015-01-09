var app = angular.module("app", ['ui.bootstrap','ngAnimate','ngRoute','ngResource','ngCookies'])

app.config(["$routeProvider", PageLoader]);
app.controller("SidebarCtrl", ["$scope", "$cookieStore", "$window", SidebarCtrl]);
app.controller("NavbarCtrl", ["$scope", "$cookieStore","$http", NavbarCtrl]);
