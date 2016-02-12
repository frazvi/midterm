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


		$scope.paths = [
			"theQuestion.html",
			"firstVideo.html",
			"secondVideo.html"
		]
		$scope.randomPath = function () {
			var randomIndex = Math.round(Math.random() * ($scope.paths.length -1));
			$scope.randomPath = './' + $scope.paths[randomIndex];
			window.location.href=$scope.randomPath;
		}



	}])
