##Iorn Bars 

Proper Nightmare.js Format 

```
var Nightmare = require('nightmare'),
  nightmare = Nightmare();

nightmare.goto('http://www.sentencingproject.org/map/map.cfm')
.click("#NA")//Select State data
.evaluate(function(){
	return document.querySelector("#map_data_table").innerText;
})
.end()
.then(function(data){
	console.log(data);
})
```