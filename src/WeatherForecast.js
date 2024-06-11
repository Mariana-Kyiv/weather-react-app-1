import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    function handleResponse(response) {
        console.log(response.data);
    }

    let apiKey=`62bc298785543e137bc6756e514eb1c3`;
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <div className="WeatherForecast">
        <div className="row">
            <div className="col">
               <div className="WeatherForecastDay">Thu</div>
                <WeatherIcon code="01d" size={36}/>
                <div className="WeatherForecastTemp">
                    <span className="ForecastTempDay">19</span> <span className="ForecastTempNight">10</span>
                    </div>
            </div>
        </div>
      </div>
    );
};