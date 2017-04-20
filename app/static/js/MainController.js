var app = angular.module('ApplianceMarketApp', []);

app.controller('MainController', function($scope, $http) {
    $http.get("/api/thumbnails")
    .then(function(response) {
        $scope.products = response.data['getimages'];
    });
});

 