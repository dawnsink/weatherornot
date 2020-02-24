//api key = 3cd9030089f3276549b644a70aa6c30d
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}


function getWeather(){
    $('.weatherResponse').html('');
    var cityName = $('#cityName').val();
    var apiCall='http://api.openweathermap.org/data/2.5/weather?q=' + cityName +'&appid={3cd9030089f3276549b644a70aa6c30d}';

    $.getJSON(apiCall, weatherCallback);

    function weatherCallback(weatherData){
        var cityName = weatherData.name;
        var country = weatherData.sys.country;
        var description = weatherData.weather[0].description;
        $('.weatherResponse').append("The weather in " + cityName + " " + country + " is currently " + description);
    }

}