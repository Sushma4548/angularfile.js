angular.module("myApp", [])
.controller("myFirstController", ['$scope', function ($scope) {
    console.log("this is a form controller");
$scope.Aleti = "hi";
$scope.hello = "hello world";
}]);