import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { resolve } from 'path';
var chakram = require('chakram');
var expect = chakram.expect;
import Config from "./config.js"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('tests that api gives response for the correct city ', async () => {
  var inCity = "Sunnyvale"
  var res = await chakram.get("http://api.openweathermap.org/data/2.5/weather?q=" + inCity + "&appid=" + Config.API_KEY);
  var outCity = res.response.body.name
  return ((expect(res).to.have.status(200)) && (expect(outCity).to.equal("Sunnyvale")));

});
