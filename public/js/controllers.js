iornBars.controller('mainController', ['$scope', '$http', '$parse', '$location', '$routeParams', '$timeout', '$anchorScroll', '$interval', 'anchorSmoothScroll',
	                                     function($scope,  $http,  $parse,  $location,   $routeParams, $timeout, $anchorScroll, $interval, anchorSmoothScroll) {
	//Render bio button 
	$timeout(function(){
		$scope.show = true; 
	}, 3000); 	

	//Run background-image slide-show
	$interval(function(){
		$timeout(function(){
				$scope.set_bgrd_image = function(){
						return {  "background": "center url('/images/iornbars2.jpg')",
							  "background-size": "cover",
							   "background-repeat": "no-repeat",
							   "-webkit-transition": "all linear 3s",
							   "-moz-transition": "all linear 3s",
							   "-o-transition": "all linear 3s",
							   "transition": "all linear 3s"}			
				}
			}, 2000)		

		$timeout(function(){
				$scope.set_bgrd_image = function(){
						return {  "background": "center url('/images/iornbars3.jpg')",
							  "background-size": "cover",
							   "background-repeat": "no-repeat",
							   "-webkit-transition": "all linear 3s",
							   "-moz-transition": "all linear 3s",
							   "-o-transition": "all linear 3s",
							   "transition": "all linear 3s"}			
				}
			}, 6000)		

		$timeout(function(){
				$scope.set_bgrd_image = function(){
						return {  "background": "center url('/images/iornbars4.jpg')",
							  "background-size": "cover",
							   "background-repeat": "no-repeat",
							   "-webkit-transition": "all linear 3s",
							   "-moz-transition": "all linear 3s",
							   "-o-transition": "all linear 3s",
							   "transition": "all linear 3s"}			
				}
			}, 10000)		

		$timeout(function(){
				$scope.set_bgrd_image = function(){
						return {  "background": "center url('/images/iornbars5.jpeg')",
							  "background-size": "cover",
							   "background-repeat": "no-repeat",
							   "-webkit-transition": "all linear 3s",
							   "-moz-transition": "all linear 3s",
							   "-o-transition": "all linear 3s",
							   "transition": "all linear 3s"}			
				}
			}, 14000)		

		$timeout(function(){
				$scope.set_bgrd_image = function(){
						return {  "background": "center url('/images/iornbars.jpg')",
							  "background-size": "cover",
							   "background-repeat": "no-repeat",
							   "-webkit-transition": "all linear 3s",
							   "-moz-transition": "all linear 3s",
							   "-o-transition": "all linear 3s",
							   "transition": "all linear 3s"}			
				}
			}, 18000)
	}, 25000); 

	//render heading text 
	$scope.texttyping = ["What Are Your Chances?"]

	//Render example input text          
	$scope.$on('$routeChangeSuccess', function () {
		$timeout(function(){    
			$(".form-control").typed({
			  strings: ["I am a 25 year-old white male living in the state of California",
			  	    "I am a 17 year-old hispanic female living in New York",
			  	    "I am a 45 year-old black man living in Illinois",
			  	    ""],
			  typeSpeed: 25
			});
		}, 3000);
	});
	

}]);