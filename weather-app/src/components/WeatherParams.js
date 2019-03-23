import React from "react";

const WeatherParams = props => (
	<div className="weather__info">
	 {	
	 	props.city && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }</span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p className="weather__key"> Temperature: 
	 		<span className="weather__value"> { props.temperature + "°C"}	</span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p className="weather__key"> Humidity: 
	 		<span className="weather__value"> { props.humidity + "%"} </span>
	 	</p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);

export default WeatherParams;