import React from "react";

const DisplayBox = ({ currentWeather }) => {
  console.log(currentWeather);

  let fahrenheitTemp = (currentWeather?.main.temp * 1.8 + 32).toFixed(2);

  return (
    <div className="displayBox">
      <p className="locationName">{currentWeather?.name}</p>
      <p className="currentTemp">
        {`${currentWeather?.main.temp} °C / ${fahrenheitTemp}
         °F`}
      </p>
      <p className="weatherDescription">
        {currentWeather?.weather[0].description}
      </p>
      {currentWeather && (
        <img
          src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
          alt={currentWeather.weather[0].description}
          className="weatherIcon"
        />
      )}

      <p className="maxMinTemp">{`L:${currentWeather?.main.temp_min}° H:${currentWeather?.main.temp_max}°`}</p>
    </div>
  );
};

export default DisplayBox;
