import React from "react";

const LocationButtons = ({
  cities,
  setCity,
  activeButton,
  setActiveButton,
  getCurrentLocation,
}) => {
  console.log(cities);

  return (
    <div className="locationButtons">
      <button
        className={`currentLocationButton ${
          activeButton === "" ? "active" : ""
        }`}
        onClick={() => {
          setCity("");
          getCurrentLocation();
          setActiveButton("");
        }}
      >
        Current Location
      </button>
      {cities.map((city, i) => {
        return (
          <button
            key={i}
            className={`anotherLocationButton ${
              activeButton === city ? "active" : ""
            }`}
            onClick={() => {
              setCity(city);
              setActiveButton(city);
              console.log(city);
            }}
          >
            {city}
          </button>
        );
      })}
    </div>
  );
};

export default LocationButtons;
