import React from "react";

// const conditionIcons = {
//   Clear : 
// }

const WeatherInfo = ({ weather }) => {
  return (
    <div className="glass p-6 shadow-lg w-full max-w-md rounded-2xl text-center text-white space-y-2 bg-opacity-20">
      <h2 className="text-xl font-semibold">
        {weather.name},{weather.country}
      </h2>
      <p className="text-3xl mt-2">{weather.temp} °C</p>
      <p className="capitalize text-xl">{weather.condition}</p>
      <p className="text-xl">Humidity : {weather.humidity}%</p>
      
    </div>
  );
};

export default WeatherInfo;
