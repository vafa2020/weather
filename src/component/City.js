import { useState } from "react";
import { FaCloudShowersHeavy } from "react-icons/all";
const City = ({ setCity, fetchWeather }) => {
  const changeHandler = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <span>
        <FaCloudShowersHeavy className="icon" />
      </span>
      <h3 className=" mt-10 text-3xl font-serif">Find Weather Of Your City</h3>
      <div className="flex items-center mt-20 relative">
        <input
          onChange={changeHandler}
          className="border-2 px-5 py-3 rounded-lg w-96"
          placeholder="Your City ..."
        />
        <button className="button" onClick={fetchWeather}>
          search
        </button>
      </div>
    </div>
  );
};

export default City;
