var app = angular.module('EggApp', ['ngRoute']);


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/contact', {
            templateUrl: 'book.html',
            controller: 'BookController',
        })
        .when('/Book/:bookId/ch/:chapterId', {
            templateUrl: 'chapter.html',
            controller: 'ChapterController'
        });


app.controller('ContactController', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('contacts.json').success(function(data) {
            $scope.sites = data;
        });
    }]);
app.controller('FooterController', ['$scope',
    function ($scope) {
        $scope.sites = [
            {name: 'Bootstrap', url: 'http://getbootstrap.com/'},
            {name: 'Material Design for Bootstrap', url: 'http://fezvrasta.github.io/bootstrap-material-design/'},
            {name: 'AngularJS', url: 'https://angularjs.org/'},
            {name: 'Font Awesome', url: 'http://fortawesome.github.io/Font-Awesome/'},
        ];
    }]);
