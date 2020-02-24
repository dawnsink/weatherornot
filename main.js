//api key = 3cd9030089f3276549b644a70aa6c30d
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

async function getWeather(event){
    const cityName=document.getElementById("cityName").value;
    //console.log(cityName)
    const url="https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&appid=3cd9030089f3276549b644a70aa6c30d";
    //console.log(url)
    const response = await fetch(url);
    const weatherData = await response.json();
    //console.log(weatherData.weather[0].main)
    
    const weatherResult=document.getElementById("result");
    weatherResult.style.textTransform
    weatherResult.innerHTML=`<p>It's definitely weather. ${cityName} is currently ${weatherData.weather[0].main}.</p>`
}