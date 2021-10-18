import axios from "axios";
import { useState } from "react";
import "./App.css";
import City from "./component/City";
import Weather from "./component/Weather";

function App() {
  const API_key = "137a8dc900a266046a122c55842da2d4";
  const [city, setCity] = useState();
  const [weather, setWheather] = useState();
  const fetchWeather = async () => {
    try {
      const getWeather = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`
      );
      if (getWeather.status === 200) {
        setWheather(getWeather.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="flex flex-col items-center h-4/5 w-3/5 rounded-lg shadow-2xl p-10">
        <h1 className="mt-10 text-4xl font-serif">React Weather App</h1>
        {weather ? (
          <Weather weather={weather} />
        ) : (
          <City setCity={setCity} fetchWeather={fetchWeather} />
        )}
      </div>
    </div>
  );
}

export default App;
