// declare global variables
var martaAPIkey = "1b88df3e-8bf3-472c-ae67-2497f94f1d0f";
var martaArray = [];

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
