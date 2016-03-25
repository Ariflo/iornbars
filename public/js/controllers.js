iornBars.controller('mainController', ['$scope', '$http', '$parse', '$location', '$routeParams', '$timeout', '$anchorScroll', '$interval', 'anchorSmoothScroll',
	                                     function($scope, $http,  $parse,  $location,   $routeParams, $timeout, $anchorScroll, $interval, anchorSmoothScroll) {    
	//set up variable to prevent scroll down to map unitl user input has been validated
	var preventScroll = true;	

	//Set-up user object
	$scope.user = {};

	//Render bio button 
	//$timeout(function(){
		$scope.show = true; 
	//}, 5000); 

	//Set about display to not render 
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

	//Scroll to map
	$scope.goToMap = function(eID) {
		if(!preventScroll){
			anchorSmoothScroll.scrollTo(eID);
		}
	};

	//Parse thru user input
	$scope.inputParser = function(userInfo){
		//call server for state data check
		$http({
			method: "GET",
			url: "/api/states"

		}).then(function(state){
			foundState = false;
			
			for(var i = 0; i< state.data.length; i++){
				var userInput = userInfo.toLowerCase(); 
				//validate if input contains a US State
				if(userInput.includes(state.data[i].state_name.toLowerCase())){
					foundState  = true;

					//validate if user entered demographic information 
					var re = /hispanic|black|white|male|female/g;
					if(re.test(userInput)){
						//adding demographic information to scope
						var demographics = userInput.match(re);
						//push demographic information to array 
						demographics.push(state.data[i].state_name);
						preventScroll = false;	

						//function that takes array as input and returns 
						//array with probabilities
						$scope.getStats(demographics);
						
						//render selected state once input has been validated 
						$timeout(function() {
							angular.element('#chancesButton').triggerHandler('click');
							angular.element("[id= '"+ demographics[2] + "']").d3Click();
						}, 500);
					}
				}
			}
			if (!foundState) {
				$scope.user.info = "Please provide a State"; 
			}
		}).catch(function(err){
			console.log(err);
		});
	}

	//send user demographic information to DB
	$scope.getStats = function(demoInfo){
		//call server for state data check
		$http({
			method: "GET",
			url: "/api/state/" + demoInfo[2]

		}).then(function(state){


			state.data;

		}).catch(function(err){
			console.log(err);
		});

	}

	//Invoke click event for d3 map
	//http://stackoverflow.com/questions/9063383/how-to-invoke-click-event-programmatically-in-d3
	angular.element.fn.d3Click = function () {
	  this.each(function (i, e) {
	    var evt = new MouseEvent("click");
	    e.dispatchEvent(evt);
	  });
	};


	//Push Jquery/JS logic post successful route land       
	$scope.$on('$routeChangeSuccess', function () {
		//Render example input 
		// $timeout(function(){    
		// 	$(".form-control").typed({
		// 		 strings: ["I am a white male living in the state of California ",
		// 		  	   "I am a hispanic female living in New York ",
		// 		  	   "I am a black man living in Illinois ",
		// 		  	   ""],
		// 		 typeSpeed: 35,
		// 		 backSpeed: 0,
		// 	});
		// }, 10000);

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

		var svg = d3.select("#map")
		    .append("svg")
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

		  // state names
		  d3.tsv("us-state-names.tsv", function(tsv){
		            //extract the names and Ids
		            var names = {};
		            tsv.forEach(function(d,i){
		              names[d.id] = d.name;
		            });		           

			g.append("g")
			  .attr("class", "states-bundle")
			  .selectAll("path")
			  .data(topojson.feature(us, us.objects.states).features)
			  .enter()
			  .append("path")
			  .attr("d", path)
			  .attr("stroke", "#000000")
			  .attr("stroke-width", ".25")
			  .attr("class", "states")
			  .attr("id", function(d){
			      return names[d.id];
			  })
			  .on("click", clicked);

		      });
		});

		function clicked(d) {
		  document.getElementById("stateHeading").innerHTML = this.id;
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