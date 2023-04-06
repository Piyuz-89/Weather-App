import React from "react";

const WeatherCity = (props) =>{

    const {weather} = props;

    return (
        <div>
            {weather?.main?.temp} ℃
        </div>
    );
}

export default WeatherCity;