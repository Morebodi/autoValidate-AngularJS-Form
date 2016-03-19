/**
@author Morebodi Modise
@email modisemorebodi@gmail.com
@website mrmodise.com
@designation software engineer
@origin Botswana, based in South Africa

*/

(function () {
    'use strict';
    var app = angular.module('app', ['jcs-autoValidate', 'angular-ladda']);

    app.run(function (defaultErrorMessageResolver) {
        defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
            errorMessages.badFirstName = 'Firstname can only contain letters';
        });
    });

    app.controller('FormController', function ($scope, $http) {

        $scope.formModel = {};
        $scope.submitting = false;

        $scope.onSubmit = function () {

            $scope.submitting = true;
            console.log("data successfully submitted");
            console.log($scope.formModel);

            $http.post('url of server to accept the request', $scope.formModel)
                .success(function (data) {
                    console.log("Data submission successful");
                    $scope.submitting = false;
                }).error(function (data) {
                    console.log("Data submission failed");
                    $scope.submitting = false;
                });

        };
    });
}());