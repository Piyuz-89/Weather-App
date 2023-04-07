import React, { useEffect } from "react";


const SearchCity = (props) => {

    const { setCity, getWeather } = props;


    return (

        <form onSubmit={getWeather}>
            <div className="row height d-flex justify-content-center align-items-center">
                <div className="col-md-8">
                    <div className="search">
                        <input className="form-control" type="text" onChange={(e) => { setCity(e.target.value) }} placeholder="Enter your city here" />
                        <button className="btn btn-danger" type="submit">Search</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SearchCity;