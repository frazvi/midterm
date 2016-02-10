angular.module("midtermApp", []);

angular
	.module("midtermApp")
	.controller("midtermTroller", ['$scope', function($scope) {
	
		$scope.shouldShowLB = true

		$scope.shouldShow = function () {
			return $scope.shouldShowLB
		}

		$scope.goHome = function () {
			$scope.shouldShowLB = false
		}

		$scope.randomPath = function () {
			var randomIndex = Math.random($scope.paths.length - 1)
			console.log(randomIndex);
			return $scope.paths[randomIndex]
		}
		$scope.paths = [
			"question",
			"videoOne",
			"videoTwo"
		]

	}])
