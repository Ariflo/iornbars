iornBars.controller('mainController', ['$scope', '$http', '$parse', '$location', '$routeParams', '$timeout', '$anchorScroll', '$interval', 'anchorSmoothScroll',
	                                     function($scope,  $http,  $parse,  $location,   $routeParams, $timeout, $anchorScroll, $interval, anchorSmoothScroll) {
	//Render bio button 
	$timeout(function(){
		$scope.show = true; 
	}, 3000); 

	//set about display to not render 
	$scope.displayAbout = false;
	//Reveal display box upon hover
	$scope.showAbout = function (){
		$scope.displayAbout = !$scope.displayAbout;
	}	

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

	//Render heading text 
	$scope.texttyping = ["What Are Your Chances?"];


	//Push Jquery logic post successful route        
	$scope.$on('$routeChangeSuccess', function () {
		//Render example input 
		$timeout(function(){    
			$(".form-control").typed({
				 strings: ["I am a 25 year-old white male living in the state of California",
				  	   "I am a 17 year-old hispanic female living in New York",
				  	   "I am a 45 year-old black man living in Illinois",
				  	   ""],
				 typeSpeed: 35,
				 backSpeed: 0,
			});
		}, 3000);

		//Hide Navbar upon scroll down
		$(window).scroll(
		    {
		        previousTop: 0
		    }, 
		    function () {
			    var currentTop = $(window).scrollTop();
				    if (currentTop < this.previousTop) {
				        $(".nav-bar").show();
				    } else {
				        $(".nav-bar").hide();
				    }
		    this.previousTop = currentTop;
		});
	});
}]);