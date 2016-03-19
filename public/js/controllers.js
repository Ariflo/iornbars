iornBars.controller('mainController', ['$scope', '$http', '$parse', '$location', '$routeParams', '$timeout', '$anchorScroll', '$interval', 'anchorSmoothScroll',
	                                     function($scope,  $http,  $parse,  $location,   $routeParams, $timeout, $anchorScroll, $interval, anchorSmoothScroll) {
	//Render bio button 
	$timeout(function(){
		$scope.show = true; 
	}, 1000); 	

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

}]);