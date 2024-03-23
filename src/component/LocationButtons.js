import React from "react";

const LocationButtons = () => {
  return (
    <div className="locationButtons">
      <button className="currentLocationButton">Current Location</button>
      <button className="anotherLocationButton">Seoul</button>
      <button className="anotherLocationButton">London</button>
      <button className="anotherLocationButton">New york</button>
      <button className="anotherLocationButton">Melbourne</button>
    </div>
  );
};

export default LocationButtons;
