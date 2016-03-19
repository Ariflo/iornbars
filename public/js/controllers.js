iornBars.controller('mainController', ['$scope', '$http', '$parse', '$location', '$routeParams', '$timeout', '$anchorScroll', 'anchorSmoothScroll',
	                                     function($scope,  $http,  $parse,  $location,   $routeParams, $timeout, $anchorScroll, anchorSmoothScroll) {
	//Render bio button 
	$timeout(function(){
		$scope.show = true; 
		$scope.changeImage = true; 
	}, 2000); 	

	$timeout(function(){
		$scope.changeImage = false; 
		$scope.changeImage2 = true; 
	}, 4000); 

}]);