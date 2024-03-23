import React from "react";

const DisplayBox = ({ currentWeather }) => {
  console.log(currentWeather);

  let fahrenheitTemp = (currentWeather?.main.temp * 1.8 + 32).toFixed(2);

  return (
    <div className="displayBox">
      <p className="currentLocation">{currentWeather?.name}</p>
      <p className="currentTemp">
        {`${currentWeather?.main.temp} °C / ${fahrenheitTemp}
         °F`}
      </p>
      <p>{currentWeather?.weather[0].description}</p>
      <p>{`L:${currentWeather?.main.temp_min}° H:${currentWeather?.main.temp_max}°`}</p>
    </div>
  );
};

export default DisplayBox;
