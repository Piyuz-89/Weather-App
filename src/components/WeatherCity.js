import React from "react";
import WeatherBox from "./WeatherBox";

const WeatherCity = (props) => {

    const { weather } = props;

    return (
        <>
            <div className="row height d-flex justify-content-center align-items-center mt-3">
                <div className="col-md-8 rounded py-2 px-5 temp-container" style={weather?.weather[0]?.icon.includes("d")?{background:"#95BDFF",color:"black"}:{background:"#50577A",color:"white"}}>
                    <div className="row">
                        <div className="col-sm-8 position-relative">
                            <div className="row pt-3">
                                <p style={weather?.weather[0]?.icon.includes("d")?{color:"black"}:{color:"#C8DBBE"}}>
                                    <img src="icons/location.svg" style={{ height: "30px", width: "30px", padding: "0 5px 5px 0" }} alt="" srcset="" />
                                    {weather?.name},<span> {weather?.sys?.country}</span>
                                </p>
                            </div>
                            <div className="row temperature ps-3">
                                <temp style={{ fontSize: "50px" }}>{weather?.main?.temp} <span style={{ fontSize: "30px" }}>°C</span> </temp>
                                <p style={weather?.weather[0]?.icon.includes("d")?{color:"black"}:{color:"#C8DBBE"}}>{weather?.weather[0]?.main}</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <img className="weather-icon" src={`icons/${weather?.weather[0]?.icon}.svg`} alt="" />
                        </div>
                    </div>

                </div>
                <div className="col-sm-8  rounded mt-3" style={weather?.weather[0]?.icon.includes("d")?{background:"#7286D3",color:"#1B2430"}:{background:"#333456",color:"white"}}>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-6">
                                
                                </div>
                            </div>
                            <WeatherBox name="Feels Like" value={weather?.main?.feels_like} unit="°C" direction=""/>
                        </div>
                        <div className="col-sm-6">
                        <WeatherBox name="Wind" value={weather?.wind?.speed} direction={weather?.wind?.deg} unit="m/s"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <WeatherBox name="Pressure" value={weather?.main?.pressure} unit="hPa"/>
                        </div>
                        <div className="col-sm-6">
                        <WeatherBox name="Humidity" value={weather?.main?.humidity} unit="%"/>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default WeatherCity;