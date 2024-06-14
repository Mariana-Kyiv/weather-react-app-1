import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props){

    function day() {
    let date = new Date (props.data.dt * 1000);
    let day = date.getDay();
    let days = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return(
        days[day]
    );
    }
return (
    <div className="ForecastDay">
        <div className="WeatherForecastDay">{day()}</div>
                <WeatherIcon code={props.data.weather[0].icon} size={36}/>
                <div className="WeatherForecastTemp">
                    <span className="ForecastTempDay">{Math.round(props.data.temp.max)}°</span>
                    <span className="ForecastTempNight">{Math.round(props.data.temp.min)}°</span>
                    </div>
    </div>
);
};