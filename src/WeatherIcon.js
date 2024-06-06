import React from 'react';
import  { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props) {
    if (props.code === "01d") {
   return (
    <WeatherSvg state="sunny" width={80} height={80} />);
    }

     if (props.code === "01n") {
   return (
    <WeatherSvg state="clear-night" width={80} height={80} />);
    }

     if (props.code === "02d") {
   return (
    <WeatherSvg state="partlycloudy" width={80} height={80} />);
    }

     if (props.code === "02n") {
   return (
    <WeatherSvg state="partlycloudy" width={80} height={80} />);
    }

     if (props.code === "03d") {
   return (
    <WeatherSvg state="cloudy" width={80} height={80} />);
    }

     if (props.code === "03n") {
   return (
    <WeatherSvg state="cloudy" width={80} height={80} />);
    }

     if (props.code === "04d") {
   return (
    <WeatherSvg state="cloudy" width={80} height={80} />);
    }

        if (props.code === "04n") {
   return (
    <WeatherSvg state="cloudy" width={80} height={80} />);
    }

        if (props.code === "09d") {
   return (
    <WeatherSvg state="rainy" width={80} height={80} />);
    }

        if (props.code === "09n") {
   return (
    <WeatherSvg state="rainy" width={80} height={80} />);
    }

        if (props.code === "10d") {
   return (
    <WeatherSvg state="pouring" width={80} height={80} />);
    }

        if (props.code === "10n") {
   return (
    <WeatherSvg state="pouring" width={80} height={80} />);
    }

        if (props.code === "11d") {
   return (
    <WeatherSvg state="lightning-rainy" width={80} height={80} />);
    }

        if (props.code === "11n") {
   return (
    <WeatherSvg state="lightning-rainy" width={80} height={80} />);
    }

        if (props.code === "13d") {
   return (
    <WeatherSvg state="snowy" width={80} height={80} />);
    }

        if (props.code === "13n") {
   return (
    <WeatherSvg state="snowy" width={80} height={80} />);
    }

         if (props.code === "50d") {
   return (
    <WeatherSvg state="fog" width={80} height={80} />);
    }

         if (props.code === "50n") {
   return (
    <WeatherSvg state="fog" width={80} height={80} />);
    }
}