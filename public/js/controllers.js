iornBars.controller('mainController', ['$scope', '$http', '$parse', '$location', '$routeParams', '$timeout', '$anchorScroll', '$interval', 'anchorSmoothScroll',
	                                     function($scope,  $http,  $parse,  $location,   $routeParams, $timeout, $anchorScroll, $interval, anchorSmoothScroll) {
	//Render bio button 
	$timeout(function(){
		$scope.show = true; 
	}, 2000); 	

	$interval(function(){
		$timeout(function(){
				$scope.set_bgrd_image = function(){
						return {  "background": "center url('/images/iornbars2.jpg')",
							  "background-size": "cover",
							   "background-repeat": "no-repeat",
							   "-webkit-transition": "all linear 2s",
							   "-moz-transition": "all linear 2s",
							   "-o-transition": "all linear 2s",
							   "transition": "all linear 2s"}			
				}
			}, 2000)		

		$timeout(function(){
				$scope.set_bgrd_image = function(){
						return {  "background": "center url('/images/iornbars3.jpg')",
							  "background-size": "cover",
							   "background-repeat": "no-repeat",
							   "-webkit-transition": "all linear 2s",
							   "-moz-transition": "all linear 2s",
							   "-o-transition": "all linear 2s",
							   "transition": "all linear 2s"}			
				}
			}, 3000)
	}, 3000); 

}]);