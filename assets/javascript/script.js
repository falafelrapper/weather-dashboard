// Main Script
/*
1. Make a function for searching cities and saving those cities
2. Make a function that displays the city entered with it's name, date, icon of weather condition,
   the temperature, humidity, and wind speed
3. Make that function also loop so that it can show the information for up to 5 days, all matching
   the same information as the first date
4. Set event handlers for each city saved to localStorage so that you can call those back up in
   search
*/


const weatherAPI = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid=ff39ab475ce0152649df7557cf533727';
const geoAPI = 'http://api.openweathermap.org/geo/1.0/direct?q={cityname},{statecode},{countrycode}&limit={limit}&appid=ff39ab475ce0152649df7557cf533727';

function getCurrentWeather(city, apiKey) {
    // Implement code to fetch current weather data from OpenWeatherMap API
    // Display the data in the #currentWeather element
    $.ajax({
        url: 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid=ff39ab475ce0152649df7557cf533727',
        method: 'GET',
        success: function (data) {
            // Handle the data received from the API
            displayCurrentWeather(data);
        },
        error: function (error) {
            console.error('Error fetching current weather:', error);
        }
    });
}

// Function to get 5-day forecast
function get5DayForecast(city, apiKey) {
    // Implement code to fetch 5-day forecast data from OpenWeatherMap API
    // Display the data in the #forecast element
}

// Function to save city to local storage
function saveCity(city) {
    // Implement code to save the city to local storage
    // Update the #savedCities element with the saved cities
}

// Function to load saved cities from local storage
function loadSavedCities() {
    // Implement code to load saved cities from local storage
    // Update the #savedCities element with the saved cities
}

// Call the function to load saved cities when the page loads
loadSavedCities();
$('#searchBtn').on('click', function () {
    const city = $('#cityInput').val();
    if (city !== '') {
        // Call functions to get current weather and 5-day forecast
        getCurrentWeather(city, apiKey);
        get5DayForecast(city, apiKey);

        // Save city to local storage
        saveCity(city);
    }
});