import React from "react";
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog,
} from "react-icons/wi";

const conditionIcons = {
  Clear: <WiDaySunny size={48} className="text-yellow-400" />,
  Clouds: <WiCloudy size={48} className="text-gray-400" />,
  Rain: <WiRain size={48} className="text-blue-400" />,
  Snow: <WiSnow size={48} className="text-blue-200" />,
  Thunderstorm: <WiThunderstorm size={48} className="text-purple-500" />,
  Fog: <WiFog size={48} className="text-gray-300"/>,
};

const WeatherInfo = ({ weather }) => {

  const {temp, condition, humidity, name, country } = weather;
  const icon = conditionIcons[condition]  || <WiDaySunny size={48}/>

  return (
    <div className="mt-6 p-4 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">{name}, {country}</h2>
          <p className="text-xl font-semibold text-gray-400 dark:text-gray-300">{condition}</p>
        </div>
        <div>{icon}</div>
      </div>
      <div className="mt-4">
        <p className="text-xl font-semibold">Tempratur : {temp}&deg;C</p>
        <p className="text-xl font-semibold">Humidity : {humidity}%</p>
      </div>
    </div>
  );
};

export default WeatherInfo;
