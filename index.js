const api = {
    key: "06af2c84a95e6a736fd7bab4b3be279d",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.getElementById('searchBox');
    searchbox.addEventListener('keypress', setQuery);
function setQuery(e) {
 if (e.keyCode == 13) {
     getWeather(searchbox.value);
 }
}

    function getWeather(query){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            init(data);
        })
        .catch(function (err) {
            console.warn('Something went wrong.', err);
        });

        const init = (data) => {
            updateName(data.name)
            updateTemp(Math.round(data.main.temp))
            updateFeelsLike(Math.round(data.main.feels_like))
            updateDescription(data.weather[0].description)
            updateIcon(data.weather[0].icon);
            updateMinTemp(Math.round(data.main.temp_min))
            updateMaxTemp(Math.round(data.main.temp_max))
        }
    }
        
        var date = new Date().toDateString();
        const dateElement = document.getElementById('date');
        dateElement.textContent = date;

        const updateName = (name) => {
            const nameElement = document.getElementById('name');
            nameElement.textContent = name;
        }
        const updateTemp = (temp) => {
            const tempElement = document.getElementById('temp');
            tempElement.textContent = temp + "C";
        }
        const updateFeelsLike = (feelslike) => {
            const feelslikeElement = document.getElementById('feelslike');
            feelslikeElement.textContent ="Feels like " + feelslike + "C";
        }
        const updateDescription = (description) => {
            const descriptionElement = document.getElementById('description');
            descriptionElement.textContent = description;
        }
        const updateIcon = (icon) => {
            const iconElement = document.getElementById('weatherIcon');
            iconElement.src = `icons/${icon}.png`; 
        }
        const updateMinTemp = (mintemp) => {
            const mintempElement = document.getElementById('mintemp');
            mintempElement.textContent ="Minimum Temperature " + mintemp + "C";
        }
        const updateMaxTemp = (maxtemp) => {
            const maxtempElement = document.getElementById('maxtemp');
            maxtempElement.textContent ="Maximum Temperature " + maxtemp + "C";
        }
