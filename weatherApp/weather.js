class Weather{
    constructor(city,country){
        this.apikey = "3c1b8f5c95ad1c5f9a555f5da978b90f";
        this.city = city;
        this.country = country;
    }

    //Fetch weather from API
     async getWeather() {
         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apikey}`);
         
         const data = await response.json();
         return data;
     }

     async changeLocation(city, country){
         this.city = city;
         this.country = country;
     }
}