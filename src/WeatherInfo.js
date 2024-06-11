import React from "react";
import FormattedDate from "./FormattedDate"
import WeatherIcon from "./WeatherIcon"
import "./Weather.css"
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {

    return (
        <div className="WeatherInfo">
        <h1>{props.info.city}</h1>
      
        <div className="row">
            <div className="col-8 d-flex align-items-start">
                <WeatherIcon code={props.info.icon} size={50} />
          <div>
            <WeatherTemperature celsius={props.info.temperature} />
            </div>
            </div>
          
            <div className="col-4">
                <ul>
                    <li>Wind: {Math.round(props.info.wind)} km/h</li>
                    <li>Humidity: {props.info.humidity}%</li>
                    <li>Visibility: {(props.info.visibility) / 100}%</li>
                </ul>
            </div>
        </div>
          <ul className="mt-2">
             <li className="text-capitalize">{props.info.description}</li>
            <li className="mt-2"><FormattedDate date={props.info.date} /></li>
        </ul>
        </div>
    );
}