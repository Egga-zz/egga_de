var app = angular.module('EggApp', []);


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
