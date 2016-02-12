


angular.module ("theQuestionApp", []);

angular
	.module("theQuestionApp")
	.controller ("theQuestionTroller", ['$scope', function($scope) {
		
		$scope.showQuestion = true

		$scope.submission = function() {
			if ($scope.answer.toLowerCase() === "friday") {
				window.location.href="timeMoving.html"
			} else if ($scope.answer.toLowerCase() === "monday") {
				window.location.href="egoMoving.html"
			}
		}
		



}])