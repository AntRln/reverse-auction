// MODULE
var myApp = angular.module('myApp', []);


// CONTROLLERS
myApp.controller('auctionController', ['$scope', '$log','$interval', function ($scope, $log, $interval){
    
    $scope.isAuctionOn = false;
    
    $scope.initialAmount = 100;
    
    $scope.currentAmount = 100;

    
    var beginAuction = function(){
        $scope.isAuctionOn = true;
        $log.log("Auction has begun!");
    }
    
    $interval(beginAuction, 3000, 1);

    var stop;
    $scope.auction = function() {

        stop = $interval(function() {
        if ($scope.currentAmount > 0) {
          $scope.currentAmount = $scope.currentAmount - 5;
        } 
            else {
              $scope.stopAuction();
            }
          }, 1000);
        };

    $scope.stopAuction = function() {
      if (angular.isDefined(stop)) {
        $interval.cancel(stop);
        stop = undefined;
      }
    };
    
}])