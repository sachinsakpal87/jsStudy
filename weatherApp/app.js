//Init weather object

const ui = new UI();
const objStorage = new storage();
const pre_def_location = objStorage.getLocation();
const weatherObj = new Weather(pre_def_location.city,pre_def_location.country);

//Get weather when DOM load

document.addEventListener('DOMContentLoaded', getWeather);

// weatherObj.changeLocation('Miami', 'US');

function getWeather(){
    weatherObj
    .getWeather()
    .then((weather)=>ui.displayWeather(weather))
    .catch((err)=>console.log(err));
}

// Change location event

document.getElementById('w-change-btn').addEventListener('click',(e)=> {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    weatherObj.changeLocation(city,country);
    getWeather();
    objStorage.setLocation(city,country);

    $('#locModal').modal('hide');
})
