import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props){
 let [loaded, setLoaded] = useState(false);
 let [forecastData, setForecastData] = useState(null);
 
 useEffect (()=> {
    setLoaded(false);
 },
    [props.coordinates]);
 

    function handleResponse(response) {
        setForecastData(response.data.daily);
        setLoaded(true);
     
    }
    if (loaded) {
        return (
      <div className="WeatherForecast">
        <div className="row">
            {forecastData.map( function (dailyForecast, index) {
                   if (index <6) {
                return (
                        <div className="col" key={index}>
                        <ForecastDay data={dailyForecast} />
                        </div>
                );
                   } else return null
            })}
            
        </div>
      </div>
    );
    } else {
    
    let apiKey=`62bc298785543e137bc6756e514eb1c3`;
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
        null
    );
};
};