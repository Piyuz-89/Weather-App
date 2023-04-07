import React, { useEffect, useState } from "react";

const WeatherCity = (props) =>{

    const {weather} = props;

    return (
        <div>
            {weather?.main?.temp} ℃
            <img src={`icons/${weather?.weather[0]?.icon}.svg`} alt="" />
        </div>
    );
}

export default WeatherCity;