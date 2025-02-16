// Pe baza unui cod de iconita primit de la un Openweather API - noi o sa generam link-ul acesteia
function getWeatherIcon (iconCode) {
    return`http://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

// Pe baza spedd-ului primit de la OpenWeather API care e in metri/sec noi o sa returnam in km/ora
function windToKmPerHour(meterPerSec){
    return(meterPerSec * 3600) / 1000;
}
