import React, { useState } from "react";
import "./Weather.css"
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

 export default function Weather (){
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});

    function handleResponse(response) {
        setWeatherData({
            city: response.data.name,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            visibility: response.data.visibility,
            icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
          
        });
        console.log(response.data);
        setReady(true);
    }

    if (ready) {
          return (
       <div className ="Weather">
        <form>
            <div className="row">
            <div className="col-9">
            <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on" /></div>
            <div className="col-3"><input type="submit" value="Search" className="btn btn-primary w-100" /></div>
            </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
            <li>Sunday 18:00</li>
            <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
            <div className="col-6 d-flex align-items-start">
            <img src={weatherData.icon} alt={weatherData.description}></img>
           <span className="temperature">{Math.round(weatherData.temperature)}</span>
            <span className="unit">°C</span>
            </div>
          
            <div className="col-6">
                <ul>
                    <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                    <li>Humidity: {weatherData.humidity}%</li>
                    <li>Visibility: {(weatherData.visibility) / 100}%</li>
                </ul>
            </div>
        </div>
       </div> 
    )
    }
    else {
const apiKey = `197ef3a642b76eef90e131866f74a0a0`;
let city =`Kyiv`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
    return(
        <div className="text-center">
            <p>Loading...</p>
      <ClipLoader
        color="#0069D9"
        loading={true}
        cssOverride={1}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
    )
    }
  
 }