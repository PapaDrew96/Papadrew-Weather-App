$(document).ready(function() {
    $('#weatherForm').submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting via the browser
        var city = $('#cityInput').val(); // Get the value of the input field
        getWeather(city); // Function to fetch and display weather
    });

    function getWeather(city) {
        var apiKey = 'f51163e7bcef424490d184854241404'; // Replace with your actual API key
        var url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

        $.ajax({
            url: url,
            type: 'GET',
            success: function(data) {
                displayWeather(data); // Handle the data returned from the API
            },
            error: function(error) {
                console.log(error);
                $('#weatherResult').html('<p class="text-danger">Failed to retrieve weather data. Please try again.</p>');
            }
        });
    }

    function displayWeather(data) {
        var weather = `<h3>${data.location.name}, ${data.location.country}</h3>
                       <p><strong>Temperature:</strong> ${data.current.temp_c} °C</p>
                       <p><strong>Condition:</strong> ${data.current.condition.text}</p>
                       <img src="https:${data.current.condition.icon}" alt="Weather Icon" />`;
        $('#weatherResult').html(weather); // Display the weather data in HTML
    }
});
