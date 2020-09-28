require('../css/index.css');
require('../css/public.css');
import angular from 'angular';

var app = angular.module('myApp', [])
app.controller('myCtrl', function ($scope) {
    $scope.hello = "hello";
    $.get("../static/goods.json", function (data) {
        localStorage.setItem('goods',JSON.stringify(data));
    })
    $scope.goods = JSON.parse(localStorage.getItem('goods'));
    console.log($scope.goods);
})
