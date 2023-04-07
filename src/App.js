import React, { useEffect, useState } from "react";
import Axios from "axios";
import SearchCity from "./components/SearchCity";
import WeatherCity from "./components/WeatherCity";
import "./App.css";


const App = () => {

  const [city, setCity] = useState("Nagpur");
  const [weather, setWeather] = useState();

  const getWeather = async (e) => {

    e.preventDefault();
    try {
      const res = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=705be47baca3509eb28ed6d72d4898e8&units=metric`
        ,);
      // console.log(res.data);
      setWeather(res.data);
    }
    catch (err) {
      console.log(err);

    }


  }

  return (
    <>

      <nav className="navbar" style={weather?.weather[0]?.icon.includes("d") ? { background: "#B4E4FF" } : { background: "#474E68" }}>
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1" style={{fontSize:"20px", fontWeight:"700",color:"#fff"}}>Weather Line</span>
        </div>
      </nav>

      <div className="container-fluid container-box ml-auto" style={weather?.weather[0]?.icon.includes("d") ? { background: "#B4E4FF" } : { background: "#404258" }}>

        <SearchCity setCity={setCity} getWeather={getWeather} />
        {weather && <WeatherCity weather={weather} />}
      </div>
    </>
  )
}

export default App;