import React from "react";

function  windDirection(degree){
    if (degree>337.5) return <>N  &#8593;</>;
    if (degree>292.5) return <>NW  &#8598;</> ;
    if(degree>247.5) return <>W  &#8592;</>;
    if(degree>202.5) return <>SW  &#8601;</>;
    if(degree>157.5) return <>S  &#8595;</>;
    if(degree>122.5) return <>SE  &#8600;</>;
    if(degree>67.5) return <>E  &#8594;</>;
    if(degree>22.5){return <>NE  &#8599;</>;}
    return ;
}

const WeatherBox = (props) =>{

    const {name, value, unit} = props;
    return ( 
        <>
            <div className="box p-3">
                <h4 style={{fontWeight:"700", fontSize:"25px"}}>{name}</h4>
                <p className="" style={{fontSize:"20px",color:"#EEEEEE"}}> {value} <span>{unit}  {windDirection(props.direction)}</span></p>
            </div>
        </>
    )
}

export default WeatherBox;