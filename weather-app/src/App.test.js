import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Titles from "./components/Titles";
import Form from "./components/Form";
import { shallow } from 'enzyme';
import { resolve } from 'path';
var chakram = require('chakram');
var expectC = chakram.expect;
import Config from "./config.js"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing 2', () => {
  shallow(<App />);
});

it('renders input Form and checks for Submit button', () => {
  const form = shallow(<Form />);
  const button = <button>Get Weather</button>;
  //expect(wrapper.contains(form)).toEqual(true);
  expect(form).toContainReact(button);
});

it('tests that api gives response for the correct city ', async () => {
  var inCity = "Sunnyvale"
  var res = await chakram.get("http://api.openweathermap.org/data/2.5/weather?q=" + inCity + "&appid=" + Config.API_KEY);
  var outCity = res.response.body.name
  return ((expectC(res).to.have.status(200)) && (expectC(outCity).to.equal("Sunnyvale")));

});
