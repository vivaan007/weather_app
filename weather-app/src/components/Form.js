import React from "react";

function restrictToChar(e) {
  const re = /[a-zA-Z ]+/g;
  if (!re.test(e.key)) {
    e.preventDefault();
  }
};

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" onKeyPress={(e) => restrictToChar(e)} placeholder="Enter City"/>
		<button>Get Weather</button>
	</form>
);

export default Form;