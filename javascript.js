$(document).ready(function(){
  
var API_KEY = "f9ab0a4f23ad42d019ac4a6b3ed26049";
var cTemp;
var fTemp;
var tempSwitch = false;
var loc;
  
$.getJSON('https://ipinfo.io', function(data){
  loc = data.loc.split(",");
  console.log(loc);
              $.getJSON('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?units=metric&lat=' + loc[0] + '&lon=' + loc[1] + '&APPID=' + API_KEY, function(wd){
    var currentLocation = wd.name;
    var currentWeather = wd.weather[0].description;
    var currentIcon = wd.weather[0].icon;
    var currentWind = wd.wind.speed;
    console.log(wd);
    cTemp = wd.main.temp;
    fTemp = Math.round((cTemp)*(9/5)+32);
    $("#currentLocation").append(currentLocation);
    $("#currentWeather").append(currentWeather);
    $("#currentTemp").append(cTemp + " C");
    $("#fTemp").append(fTemp + " F");
    $("#currentWind").append(currentWind + " m/s");
    $("#currentWeather").append('</br></br><img src="http://openweathermap.org/img/w/' + currentIcon + '.png" height=60px width=60px/><br/>');
      $(".btn").click(function(){
        if(tempSwitch===false){
          $("#currentTemp").html(fTemp + " F");
          tempSwitch = true;
        } else{
          $("#currentTemp").html(cTemp + " C");
          tempSwitch = false;
        }
        
    });
  }); 
});
});