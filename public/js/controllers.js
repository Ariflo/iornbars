iornBars.controller('mainController', ['$scope', '$http', '$parse', '$location', '$routeParams', '$timeout', '$anchorScroll', '$interval', 'anchorSmoothScroll',
	                                     function($scope,  $http,  $parse,  $location,   $routeParams, $timeout, $anchorScroll, $interval, anchorSmoothScroll) {
	//Render bio button 
	$timeout(function(){
		$scope.show = true; 
	}, 5000); 

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
				 strings: ["I am a 25 year-old white male living in the state of California ",
				  	   "I am a 17 year-old hispanic female living in New York ",
				  	   "I am a 45 year-old black man living in Illinois ",
				  	   ""],
				 typeSpeed: 35,
				 backSpeed: 0,
			});
		}, 10000);

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

		//Render d3 US Map
		var width = 960,
		    height = 500,
		    active = d3.select(null);

		var projection = d3.geo.albersUsa()
		    .scale(1000)
		    .translate([width / 2, height / 2]);

		var path = d3.geo.path()
		    .projection(projection);

		var svg = d3.select("#map").append("svg")
		    .attr("width", width)
		    .attr("height", height);

		svg.append("rect")
		    .attr("class", "background")
		    .attr("width", width)
		    .attr("height", height)
		    .on("click", reset);

		var g = svg.append("g")
		    .style("stroke-width", "1.5px");

		d3.json("USA.json", function(error, us) {
		  if (error) throw error;

		  g.selectAll("path")
		      .data(topojson.feature(us, us.objects.states).features)
		      .enter().append("path")
		      .attr("d", path)
		      .attr("class", "feature")
		      .on("click", clicked);

		  g.append("path")
		      .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
		      .attr("class", "mesh")
		      .attr("d", path);
		});

		function clicked(d) {
		  if (active.node() === this) return reset();
		  active.classed("active", false);
		  active = d3.select(this).classed("active", true);

		  var bounds = path.bounds(d),
		      dx = bounds[1][0] - bounds[0][0],
		      dy = bounds[1][1] - bounds[0][1],
		      x = (bounds[0][0] + bounds[1][0]) / 2,
		      y = (bounds[0][1] + bounds[1][1]) / 2,
		      scale = .9 / Math.max(dx / width, dy / height),
		      translate = [width / 2 - scale * x, height / 2 - scale * y];

		  g.transition()
		      .duration(750)
		      .style("stroke-width", 1.5 / scale + "px")
		      .attr("transform", "translate(" + translate + ")scale(" + scale + ")");
		}

		function reset() {
		  active.classed("active", false);
		  active = d3.select(null);

		  g.transition()
		      .duration(750)
		      .style("stroke-width", "1.5px")
		      .attr("transform", "");
		}
	});
}]);