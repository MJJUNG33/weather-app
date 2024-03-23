import { useEffect, useState } from "react";
import "./App.css";
import DisplayBox from "./component/DisplayBox";
import LocationButtons from "./component/LocationButtons";
import "bootstrap/dist/css/bootstrap.min.css";

//To do
// 1. Current location's weather on landing page.
// 2. Weather is including location(city), temp, status
// 3. There are 5 buttons with current location and others cities.
// 4. When click the button of city, show the weather of selected city.
// 5. When click current location button, the weather information based on current location is showing.
// 6. When data is loading, user can see the loading spinner.

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      fetchWeatherByCurrentLocation(latitude, longitude);
    });
  };

  const fetchWeatherByCurrentLocation = async (latitude, longitude) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7c41da7881d71baf9bc475e871b9534c&units=metric`
    );
    const data = await response.json();
    console.log(data);
    setCurrentWeather(data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div className="App">
      <DisplayBox currentWeather={currentWeather} />
      <LocationButtons />
    </div>
  );
}

export default App;
