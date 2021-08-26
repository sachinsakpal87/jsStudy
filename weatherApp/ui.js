class UI {

    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.detials = document.getElementById('w-detials');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
        
    }

    calcCelsius(kelvin){
        return Math.round(kelvin-273.15)+`\xB0 C`;
    }

    async displayWeather(weather){
        this.location.textContent = weather.name + ", "+ weather.sys.country;
        this.desc.textContent = weather.weather[0].main.toUpperCase();
        this.string.textContent =  this.calcCelsius(weather.main.temp);
        
        this.icon.setAttribute('src',`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`);
        
        this.humidity.textContent = `Relative Humidity : ${weather.main.humidity}`;
        
        this.feelsLike.textContent = `Feels like : ${this.calcCelsius(weather.main.feels_like)}`;

        this.dewpoint.textContent = `Dewpoint : ${weather.main.pressure}`;

        this.wind.textContent = `Wind  : ${weather.wind.speed}`;

    }
}