##Iron Bars 
Ironbars.org uses data avaliable from the 2010 US Census and the National Prisoners Statistics Program to provide users their probability of being incaracated in their state based on their specific demographics (male, female, white, black, or other). 

##Install

Fork and enter into this repository:

```
git@github.com:Ariflo/iornbars.git
cd iornbars
```

Install all dependencies using npm

```
npm install && start
```
##Client-Side Technologies 

Angular front-end framework, jquery, and D3.js for the US map 

Users are welcomed with the question "What are your chances?" and asked to input their demographics in natural language (ie. "I am a white person from Texas", "I am a female living in New York").  

This input is run through an input-parser function using regex to pull the important data from the input, validates the user input and sends that information to the database.

##Backend Server-side Technologies 
PostgresSQL database, Node.js, and Express for routing.

The database was seeded with csv files with population and demographic data downloaded from [2010 US Census](http://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml?refresh=t)
and the [National Prisoners Statistics Program](http://www.bjs.gov/index.cfm?ty=datool&surl=/arrests/index.cfm#) along with data scraped from prisonpolicy.org.
