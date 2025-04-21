
// // let api_key = "a1a5334f7de63cb071becf8c5edd0d30";

// // document.addEventListener("click", function () {
// //     document.getElementById("btn").addEventListener("click", () => {
// //         let city = document.getElementById("input").value.trim();
// //         let errorMsg = document.getElementById("error-message");

// //         if (city) {
// //             errorMsg.innerText = ""; 
// //             getWeather(city);
// //         } else {
// //             errorMsg.innerText = "Please enter a city name!";
// //         }
// //     });
// // });

// // async function getWeather(city) {
// //     try {
// //         let response = await fetch(
// //             `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
// //         );

// //         if (response===false) {
// //             throw new Error("City not found");
// //         }

// //         let data = await response.json();
// //         displayWeather(data);
// //     } catch (error) {
// //         console.error("Error fetching weather data:", error);
// //         document.getElementById("error-message").innerText = "City not found! Try again.";
// //     }
// // }

// // function displayWeather(data) {
// //     document.getElementById("city-name").innerText = `Weather in ${data.name}`;
// //     document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
// //     document.getElementById("description").innerText = `Condition: ${data.weather[0].description}`;
// //     document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
// //     document.getElementById("wind-speed").innerText = `Wind Speed: ${data.wind.speed} km/h`;
// //     document.getElementById()
// // }


// let api_key="a1a5334f7de63cb071becf8c5edd0d30";
// document.addEventListener("click",function(){
// document.getElementById("btn").addEventListener("click",()=>{
//     let city=document.getElementById("input").value
//     let errormessage=document.getElementById("error-message") 
//     if(city){
//          errormessage.innerText="";
//         weather(city);
//     }
//     else{
//         errormessage.innerText="enter proper city";
//     }
// })

// })
// async function weather(city){
//     try{
//        let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
//        if(res===false){
//         throw new Error("no city found")
//         return;
//        }

//         let data=await res.json();
//         displayweather(data)

       
//     }
//     catch(err){
//         console.log("error while  fetching the data");
//         document.getElementById("error-message").innerText="City not found!!!!! Try again later"
//     }

// function displayweather(data)
// {
// document.getElementById("city-name").innerText=`weather in ${data.name}`;
// document.getElementById("temperature").innerText=`Temperature is ${data.main.temp}degree C`;
// document.getElementById("description").innerText = `Condition: ${data.weather[0].description}`;
//  document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
// document.getElementById("wind-speed").innerText = `Wind Speed: ${data.wind.speed} km/h`;
// let weatherCondition = data.weather[0].main.toLowerCase();

// // Define custom images for each weather condition
// let weatherImages = {
//     clear: "./clearsky.jpg",
//     clouds: "https://cdn.pixabay.com/photo/2020/06/16/01/26/fluffy-5303847_960_720.jpg",
//     rain: "./rainy_img.jpg",
//     snow: "https://wallpaperaccess.com/full/946122.jpg",
//     mist: ",https://th.bing.com/th/id/OIP.8KdffgUX64aGGBuKSH7AfwHaE8?w=275&h=184&c=7&r=0&o=5&pid=1.7",
//     fog: "./fog.jpg",
//     thunderstorm: "./thunder.jpg"
// };

// // Use the weather condition to set the custom image
// document.getElementById("weather-icon").src = weatherImages[weatherCondition]
// document.body.style.backgroundImage = `url(${imagePath})`
// }
// let imagePath = weatherImages[weatherCondition] || "./clearsky.jpg"; // Default image if condition doesn't match
// document.getElementById("weather-icon").src = imagePath;

// document.body.style.backgroundImage = `url(${imagePath})`;
// document.body.style.backgroundSize = "cover"; // Ensures the background image covers the whole page
// document.body.style.backgroundPosition = "center"; // Centers the background image
// }



// let api_key = "a1a5334f7de63cb071becf8c5edd0d30";

// document.addEventListener("click", function () {
//     document.getElementById("btn").addEventListener("click", () => {
//         let city = document.getElementById("input").value;
//         let errormessage = document.getElementById("error-message");

//         if (city) {
//             errormessage.innerText = "";
//             weather(city);
//         } else {
//             errormessage.innerText = "Enter proper city!";
//         }
//     });
// });

// input.addEventListener("click",function(eve){
//     if(eve.key==="Enter")
//        document.getElementById(btn.click());

// })

// async function weather(city) {
//     try {
//         let res = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
//         );

//         if (!res.ok) {
//             throw new Error("No city found");
//         }

//         let data = await res.json();
//         displayweather(data);
//     } catch (err) {
//         console.log("Error while fetching the data");
//         document.getElementById("error-message").innerText =
//             "City not found! Try again later.";
//     }
// }

// function displayweather(data) {
//     document.getElementById("city-name").innerText = `Weather in ${data.name}`;
//     document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
//     document.getElementById("description").innerText = `Condition: ${data.weather[0].description}`;
//     document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
//     document.getElementById("wind-speed").innerText = `Wind Speed: ${data.wind.speed} km/h`;

//     let weatherCondition = data.weather[0].main.toLowerCase();

//     // Define custom images for each weather condition
//     let weatherImages = {
//         clear: "./clearsky.jpg",
//         clouds: "https://cdn.pixabay.com/photo/2020/06/16/01/26/fluffy-5303847_960_720.jpg",
//         rain: "./rainy_img.jpg",
//         snow: "https://wallpaperaccess.com/full/946122.jpg",
//         mist: "https://th.bing.com/th/id/OIP.8KdffgUX64aGGBuKSH7AfwHaE8?w=275&h=184&c=7&r=0&o=5&pid=1.7", // Fixed URL here
//         fog: "./fog.jpg",
//         thunderstorm: "./thunder.jpg",
//     };
    
//     // Use the weather condition to set the custom image
//     let imagePath = weatherImages[weatherCondition] || "./clearsky.jpg"; // Default image if condition doesn't match


//     // Set the background image
//     document.body.style.backgroundImage = `url(${imagePath})`;
//     document.body.style.backgroundSize = "cover"; // Ensures the background image covers the whole page
//     document.body.style.backgroundPosition = "center"; // Centers the background image
// }


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


