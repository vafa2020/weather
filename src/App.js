import { useState } from "react";
import "./App.css";
import City from "./component/City";

function App() {
  const API_key = "137a8dc900a266046a122c55842da2d4";
  const [city, setCity] = useState();
  const [weather, setWheather] = useState();
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="flex flex-col  items-center h-4/5 w-3/5 rounded-lg shadow-2xl">
        <h1 className="mt-20 text-4xl font-serif">React Weather App</h1>
        <City />
      </div>
    </div>
  );
}

export default App;
