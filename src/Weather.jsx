import Search from "./Search";
import WeatherInfo from "./WeatherInfo";
import './Weather.css'
import { useState } from "react";

export default function Weather(){
    let [weather,setWeather]=useState({
        city:"London",
        temp:22.5,
        temp_max:30,
        temp_min:15,
        humidity:10,
        feels_like:30,
    })
    function data(result){
        setWeather(result);
    }
    return(
        <div className="Weather">
            <Search data={data}/>
            <WeatherInfo info={weather}/>
        </div>
    )
}