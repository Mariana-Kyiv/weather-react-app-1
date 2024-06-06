import React, { useState } from "react";
import "./Weather.css"
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import WeatherInfo from "./WeatherInfo";


 export default function Weather (props) {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            city: response.data.name,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            visibility: response.data.visibility,
            icon: response.data.weather[0].icon,
            date: new Date(response.data.dt * 1000),
        });
        setReady(true);
    }

        function search(){
                const apiKey = `197ef3a642b76eef90e131866f74a0a0`;
                const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
                axios.get(apiUrl).then(handleResponse);
        }

        function handleSubmit (event){
            event.preventDefault();
            search();
        }

        function handleCityChange (event){
           setCity(event.target.value);
        }

    if (ready) {
          return (
       <div className ="Weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
            <div className="col-9">
            <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on" onChange={handleCityChange}/></div>
            <div className="col-3"><input type="submit" value="Search" className="btn btn-primary w-100" /></div>
            </div>
        </form>
        <WeatherInfo info={weatherData} />
    
       </div> 
    )
    }
    else {
    search();
    return(
        <div className="text-center mt-5">
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