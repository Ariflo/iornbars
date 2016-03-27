iornBars.controller('mainController', ['$rootScope', '$scope', '$http', '$parse', '$location', '$routeParams', '$timeout', '$anchorScroll', '$interval', 'anchorSmoothScroll',
	                                     function($rootScope, $scope, $http,  $parse,  $location,   $routeParams, $timeout, $anchorScroll, $interval, anchorSmoothScroll) {    
	//set up variable to prevent scroll down to map unitl user input has been validated
	var preventScroll = true;

	//Set-up user object
	$scope.user = {};

	$rootScope.show = false;

	//Render bio button 
	$timeout(function(){
		$scope.display = true; 
	}, 2000); 

	//Set about display to not render 
	$scope.displayAbout = false;

	//Reveal display box upon hover
	$scope.showAbout = function (){
		$scope.displayAbout = !$scope.displayAbout;
	}	

	angular.element('#userInput').on('click', function(e){
	       $(this).data().reset();
	       $('#userInput').replaceWith('<input type="text" id="userInput" ng-model="user.info" ng-show="display" class="form-control text-center ng-pristine ng-untouched ng-valid" placeholder="I am...">');
	       $("#input_text").focus();
	   });	

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
		console.log(userInfo);
		//call server for state data check
		$http({
			method: "GET",
			url: "/api/states"

		}).then(function(state){

			for(var i = 0; i< state.data.length; i++){
				var userInput = userInfo.toLowerCase(); 
				//validate if input contains a US State
				if(userInput.includes(state.data[i].state_name.toLowerCase())){
					var foundState  = true;

					//validate if user entered demographic information 
					var reRace = /hispanic|black|white/g;
					var reGender = /male|female/g;

					if(reRace.test(userInput)){
						//adding demographic information to scope
						var demographics = userInput.match(reRace);

						//push demographic information to array 
						demographics.push(state.data[i].state_name);
						
						preventScroll = false;
						$rootScope.show = true;

						//render selected state once input has been validated 
						$timeout(function() {
							angular.element('#chancesButton').triggerHandler('click');
							angular.element("[id= '"+ demographics[1] + "']").d3Click();
						}, 500);

						//set user demo input on DOM 
						document.getElementById("demo").innerHTML = demographics[0];

					}else if(reGender.test(userInput)){
						//adding demographic information to scope
						var demographics = userInput.match(reGender);

						//push demographic information to array 
						demographics.push(state.data[i].state_name);
						
						preventScroll = false;
						$rootScope.show = true;

						//render selected state once input has been validated 
						$timeout(function() {
							angular.element('#chancesButton').triggerHandler('click');
							angular.element("[id= '"+ demographics[1] + "']").d3Click();
						}, 500);

						//set user demo input on DOM 
						document.getElementById("demo").innerHTML = demographics[0];
					}else{
						//adding demographic information to scope
						var demographics = ["other"];

						//push demographic information to array 
						demographics.push(state.data[i].state_name);
						
						preventScroll = false;
						$rootScope.show = true;

						//render selected state once input has been validated 
						$timeout(function() {
							angular.element('#chancesButton').triggerHandler('click');
							angular.element("[id= '"+ demographics[1] + "']").d3Click();
						}, 500);

						//set user demo input on DOM 
						document.getElementById("demo").innerHTML = demographics[0];
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
		// Render example input 
		$timeout(function(){    
			$(".form-control").typed({
				 strings: ["I'm a female from California",
				  	   "I am hispanic in Texas",
				  	   "I'm black from Illinois",
				  	   ""],
				 typeSpeed: 50,
			});
		}, 4000);

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
		  //set div heading to current state		
		  document.getElementById("stateHeading").innerHTML = this.id;

		  //call stats function with current demo info
		  getStats([document.getElementById("demo").innerText, this.id]);

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
		  //set div heading to 'USA' 		
		  document.getElementById("stateHeading").innerHTML = "USA";
		   //call stats function with current demo info
		  getNationalStats([document.getElementById("demo").innerText, document.getElementById("stateHeading").innerText])

		  active.classed("active", false);
		  active = d3.select(null);
		  g.transition()
		      .duration(750)
		      .style("stroke-width", "1.5px")
		      .attr("transform", "");
		}


		//send user demographic information to db
		var getStats = function(demoInfo){
			//call server for state data 
			$.ajax({
				type: "GET",
				dataType: 'json',
				url: "/api/state/" + demoInfo[1]

			}).done(function(state){
				if(demoInfo[0] === "white"){

					 var raceProb = (state.white_jailed_population/state.white_population) * 100;
					 document.getElementById("stat").innerHTML =  raceProb.toFixed(3);

				}else if(demoInfo[0] === "black"){

					var raceProb = (state.black_jailed_population/state.black_population) * 100;
					document.getElementById("stat").innerHTML = raceProb.toFixed(3);

				}else if(demoInfo[0] === "hispanic"){

					var raceProb = (state.hispanic_jailed_population/state.hispanic_population) * 100;
					document.getElementById("stat").innerHTML = raceProb.toFixed(3);

				}else if (demoInfo[0] === "male"){
					
					var genderProb = (state.male_jailed_population/state.male_population) * 100;
					document.getElementById("stat").innerHTML = genderProb.toFixed(3);

				}else if(demoInfo[0] === "female"){

					var genderProb = (state.female_jailed_population/state.female_population) * 100;
					document.getElementById("stat").innerHTML = genderProb.toFixed(3);

				}else{
					var raceProb = (state.other_jailed_population/state.other_population) * 100;
					document.getElementById("stat").innerHTML = raceProb.toFixed(3);
				}

			}).fail(function(err){
				console.log(err);
			});
		}			

		//send user demographic information to db
		var getNationalStats = function(demoInfo){
			//call server for states data check
			$.ajax({
				type: "GET",
				dataType: 'json',
				url: "/api/states/"

			}).done(function(state){
				var nationalMalePop = 0, 
				      nationalFemalePop = 0,
				      nationalWhitePop = 0,
				      nationalBlackPop = 0,
				      nationalHispanicPop = 0,
				      nationalOtherPop = 0;				

				var nationalMaleJailedPop = 0, 
				      nationalFemaleJailedPop = 0,
				      nationalWhiteJailedPop = 0,
				      nationalBlackJailedPop = 0,
				      nationalHispanicJailedPop = 0, 
				      nationalOtherJailedPop = 0;


				for(var i = 0; i< state.length; i++){

					nationalMalePop += state[i].male_population;
					nationalFemalePop += state[i].female_population;

					nationalWhitePop += state[i].white_population;
					nationalBlackPop += state[i].black_population;
					nationalHispanicPop += state[i].hispanic_population;
					nationalOtherPop += state[i].other_population;

					nationalMaleJailedPop += state[i].male_jailed_population;
					nationalFemaleJailedPop += state[i].female_jailed_population;

					nationalWhiteJailedPop += Math.floor(state[i].white_jailed_population);
					nationalBlackJailedPop += Math.floor(state[i].black_jailed_population);
					nationalHispanicJailedPop += Math.floor(state[i].hispanic_jailed_population);
					nationalOtherJailedPop += Math.floor(state[i].other_jailed_population);
				}

				if(demoInfo[0] === "white"){

					 var raceProb = (nationalWhiteJailedPop/nationalWhitePop) * 100;
					 document.getElementById("stat").innerHTML = raceProb.toFixed(3);

				}else if(demoInfo[0] === "black"){

					var raceProb = (nationalBlackJailedPop/nationalBlackPop) * 100;
					document.getElementById("stat").innerHTML = raceProb.toFixed(3);

				}else if(demoInfo[0] === "hispanic"){

					var raceProb = (nationalHispanicJailedPop/nationalHispanicPop) * 100;
					document.getElementById("stat").innerHTML = raceProb.toFixed(3);

				}else if (demoInfo[0] === "male"){
					
					var genderProb = (nationalMaleJailedPop/nationalMalePop) * 100;
					document.getElementById("stat").innerHTML = genderProb.toFixed(3);

				}else if(demoInfo[0] === "female"){

					var genderProb = (nationalFemaleJailedPop/nationalFemalePop) * 100;
					document.getElementById("stat").innerHTML = genderProb.toFixed(3);
				}else{

					var raceProb = (nationalOtherJailedPop/nationalOtherPop) * 100;
					document.getElementById("stat").innerHTML = raceProb.toFixed(3);
				}

			}).fail(function(err){
				console.log(err);
			});
		}
	});
}]);