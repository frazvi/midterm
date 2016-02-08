angular.module ("theQuestionApp", []);

angular
	.module("theQuestionApp")
	.controller ("theQuestionApp", ['$scope', function($scope) {

		$scope.questionArray = [
			justQuestion, egoPrime, timePrime
		]

		var rand = questionArray[Math.floor(Math.random() * questionArray.length)];

		console.log(rand);
	// var rand = myArray[Math.floor(Math.random() * myArray.length)];

}])