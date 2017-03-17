(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

DIController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.lunchMenu = "";
  $scope.lunchMessage = "";

  $scope.lunchButton = function () {
      if ($scope.lunchMenu === "") {
              $scope.lunchMessage = "Please enter data first";
            }
            else {
              if ($scope.lunchMenu.split(",").length <= 3) {
                $scope.lunchMessage = "Enjoy!";
              }
              else {
                $scope.lunchMessage = "Too much!";
              }
            }
    };
//  console.log($injector.annotate(DIController));
}

})();
