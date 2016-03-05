window.onload = function() {
  console.log("app starting");
  var myApp = angular.module('myApp', []);

  myApp.controller('MainController', ['$scope', function($scope) {
    $scope.appname = "Awesome app";

    $scope.friendslist = ["name1", "name2", "name3", "name4"];
    $scope.emails = [{
      "name": "friend1",
      "email": "email1@gmail.com"
    }, {
      "name": "friend1",
      "email": "email1@gmail.com"
    }, {
      "name": "friend1",
      "email": "email1@gmail.com"
    }];
  }]);
}();
