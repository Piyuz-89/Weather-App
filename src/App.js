import React, { useEffect, useState } from "react";
import Axios from "axios";
import SearchCity from "./components/SearchCity";
import WeatherCity from "./components/WeatherCity";

const App = () =>{
   
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const getWeather = async (e) =>{
  
    e.preventDefault();   
    
    const res = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=705be47baca3509eb28ed6d72d4898e8&units=metric`
      ,);
    

    // console.log(res.data);
    setWeather(res.data);
  
   
  }

  return (
    <>
      <SearchCity setCity={setCity} getWeather={getWeather}/>
      {weather && <WeatherCity weather={weather}/>}   
      
    </>
  )
}

export default App;