let api_key = "a1a5334f7de63cb071becf8c5edd0d30";

document.getElementById("btn").addEventListener("click", () => {
    let city = document.getElementById("input").value.trim();
    let errormessage = document.getElementById("error-message");

    if (city) {
        errormessage.innerText = "";
        weather(city);
    } else {
        errormessage.innerText = "Enter a propercity!";
    }
});

document.getElementById("input").addEventListener("keydown", function (eve) {
    if (eve.key === "Enter") {
        document.getElementById("btn").click();
    }
});

async function weather(city) {
    try {
        let res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${`a1a5334f7de63cb071becf8c5edd0d30`}&units=metric`);

        if (!res.ok) {
            throw new Error("City not found");
        }

        let data = await res.json();
        displayWeather(data);
    } catch (err) {
        let errorMessage = document.getElementById("error-message");
        errorMessage.innerText = "City not found! Try again later.";
        clearWeather();
    }
}

function displayWeather(data) {
    document.getElementById("city-name").innerText = `Weather in ${data.name}`;
    document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById("description").innerText = `Condition: ${data.weather[0].description}`;
    document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById("wind-speed").innerText = `Wind Speed: ${data.wind.speed} km/h`;
    document.getElementById("country").innerText = `Country: ${data.sys.country}`;
    document.getElementById("lat").innerText = `Latitude: ${data.coord.lat}`;
    document.getElementById("lon").innerText = `Longitude: ${data.coord.lon}`;
    document.getElementById("pressure").innerText = `Pressure: ${data.main.pressure} hPa`;
    
        document.getElementById("sea_level").innerText = 
        data.main.sea_level ? `Sea Level: ${data.main.sea_level} hPa` : "";
    document.getElementById("grnd_level").innerText = 
        data.main.grnd_level ? `Ground Level: ${data.main.grnd_level} hPa` : "";
    
    document.getElementById("visibility").innerText = `Visibility: ${data.visibility} meters`;

    let weatherCondition = data.weather[0].main.toLowerCase();

    let weatherImages = {
        clear: "./clearsky.jpg",
        clouds: "./cloudy.jpg",
        rain: "./rainy_img.jpg",
        snow: "https://wallpaperaccess.com/full/946122.jpg",
        mist: "https://th.bing.com/th/id/OIP.8KdffgUX64aGGBuKSH7AfwHaE8?w=275&h=184&c=7&r=0&o=5&pid=1.7",
        fog: "./fog.jpg",
        thunderstorm: "./thunder.jpg",
    };

    let imagePath = weatherImages[weatherCondition] || "./clearsky.jpg";
    document.body.style.backgroundImage = `url(${imagePath})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
}

function clearWeather() {
    document.getElementById("city-name").innerText = "";
    document.getElementById("temperature").innerText = "";
    document.getElementById("description").innerText = "";
    document.getElementById("humidity").innerText = "";
    document.getElementById("wind-speed").innerText = "";
    document.getElementById("country").innerText = "";
    document.getElementById("lat").innerText = "";
    document.getElementById("lon").innerText = "";
    document.getElementById("pressure").innerText = "";
    document.getElementById("sea_level").innerText = "";
    document.getElementById("grnd_level").innerText = "";
    document.getElementById("visibility").innerText = "";
}


