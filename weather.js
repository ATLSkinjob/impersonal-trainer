// create index.html, script.js and css files

// link js and css to index.html

// declare global variables
var martaAPIkey = "1b88df3e-8bf3-472c-ae67-2497f94f1d0f";
var martaArray = [];
// create an array of objects of each Marta station and the match long/lat numbers (gold and green lines)

// start function to call marta to retrieve real time arrivals for train
$(document).ready(function () {
//   // building api call
  var queryURL =
   "http://cors-anywhere.herokuapp.com/http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=1b88df3e-8bf3-472c-ae67-2497f94f1d0f";
 
});

/* questions to team
1. how important is the lat and lon information?
2. if it is important, then how does this api get me this information?
*/

var queryURL =
 "https://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&appid=b6888160cea1ac7e31cb37a7c245701a";
$.ajax({
 method: "GET",
 url: queryURL,
}).then(function (response) {
 console.log(response);
 var temperature = response.main.temp;
 var description = response.weather[0].description;
 temperature = Math.round(temperature);
 console.log("temperature: " + temperature);
 console.log(response.weather[0].description);
 $(".displaycurrenttemp").append(temperature + " &#8457;" + "  ");
 $(".description").append(description.toUpperCase());
});
