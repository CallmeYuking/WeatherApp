import React from 'react';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "https://api.weather.gov"

class App extends React.Component {
  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    )
  }
}

export default App;
