import React from 'react';
import Titles from "./components/Titles";
import Form from "./components/Form";
import WeatherParams from "./components/WeatherParams";
import Config from "./config.js"

//const API_KEY = "09978ae0f6c7d0fe485f99f94f7cd86c";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Config.API_KEY}&units=metric`);
    const data = await api_call.json();
    
    if ( city ) {
      if ( api_call.status === '404') {
        this.setState({
          temperature: undefined,
          city: undefined,
          humidity: undefined,
          error: "Please enter a valid city."
        });
      }
      else {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          humidity: data.main.humidity,
          error: ""
        });
      }
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        humidity: undefined,
        error: "Please enter value for city."
      });
    }
  }
  
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-5 form-container">
                  <Form getWeather={this.getWeather} />
                  <WeatherParams 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
