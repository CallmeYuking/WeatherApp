import React from 'react';
import weather from "weather-gov-api";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const api = {
  key:"1a624f1af9e10072e885ff8d026fb034"
}

// function App() {
//   return(
//     <div className='App'>
//       <main>
//         <div className="search-box">
//           <input
//             type='text'
//             className='search-bar'
//             placeholder='Enter a city'>
//           </input>
//         </div>
//       </main>
//     </div>
//   )
// }


const API_KEY = "https://api.weather.gov/stations?state=CA"
const city1 = {
        city: "san francisco",
        state: "CA"
}

class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();
    // const city = e.target.elements.city.value;
    // const state = e.target.elements.state.value;

    const api_call = await fetch(`https://api.weather.gov/points/39.7456,-97.0892`)
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div className='App'>
        <Titles />
        <div className='Weather'>
          <Weather />
        </div>
        <Form />
      </div>
    )
  }
}

export default App;
