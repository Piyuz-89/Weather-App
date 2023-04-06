import React, { useState } from "react";

const SearchCity = (props) =>{

    const {setCity, getWeather} = props;


    return (
        <div>
            <form action="" onSubmit={getWeather}>
                <input type="text" onChange={(e)=>{setCity(e.target.value)}} />
                <button type="submit">Get Weather</button>
            </form>
        </div>
    );
}

export default SearchCity;