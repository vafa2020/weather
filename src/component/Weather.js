import {
  BsDropletHalf,
  CgCompressLeft,
  FiSun,
  GiWhirlwind,
} from "react-icons/all";
import {
  brokenClouds,
  clearSky1,
  clearSky2,
  fewClouds1,
  fewClouds2,
  mist,
  rain1,
  rain2,
  scatteredClouds,
  showerRain,
  snow,
  thunderstorm,
} from "../File/img";

const weatherIcon = {
  "01d": clearSky1,
  "01n": clearSky2,
  "02d": fewClouds1,
  "02n": fewClouds2,
  "03d": scatteredClouds,
  "03n": scatteredClouds,
  "04n": brokenClouds,
  "04d": brokenClouds,
  "09n": showerRain,
  "09d": showerRain,
  "10n": rain1,
  "10d": rain2,
  "11n": thunderstorm,
  "11d": thunderstorm,
  "13n": snow,
  "13d": snow,
  "50n": mist,
  "50d": mist,
};
const Weather = ({ weather }) => {
  console.log(weather);
  const isDay = weather.weather[0].icon.includes("d");
  const getTime = (time) => {
    return `${new Date(time * 1000).getHours()}:${new Date(
      time * 1000
    ).getMinutes()}`;
  };
  return (
    <div className="flex flex-col justify-center w-full ">
      <div className="mt-5 flex items-center justify-between w-full">
        <div className="text-2xl">{`${Math.floor(weather.main.temp - 273)}°C|${
          weather.weather[0].description
        }`}</div>
        <div>
          <img src={weatherIcon[weather.weather[0].icon]} alt="" />
        </div>
      </div>
      <h1 className="mt-10 text-center font-serif font-bold text-2xl">{`${weather.name}, ${weather.sys.country}`}</h1>
      <h2 className="mt-10 font-serif ">WeatherInfo</h2>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center mt-5">
          <span className="text-5xl mr-5">
            <FiSun />
          </span>
          <div className="flex flex-col items-center">
            <span>{getTime(weather.sys[isDay ? "sunset" : "sunrise"])}</span>
            <span>{isDay ? "غروب آفتاب" : "طلوع آفتاب"}</span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <span className="text-5xl mr-5">
            <BsDropletHalf/>
          </span>
          <div className="flex flex-col items-center">
            <span>{weather.main.humidity}</span>
            <span>رطوبت</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center mt-5">
          <span className="text-5xl mr-5">
            <GiWhirlwind />
          </span>
          <div className="flex flex-col items-center">
            <span>{weather.wind.speed}</span>
            <span>باد</span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <span className="text-5xl mr-5">
            <CgCompressLeft/>
          </span>
          <div className="flex flex-col items-center">
            <span>{weather.main.pressure}</span>
            <span>فشار</span>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Weather;
