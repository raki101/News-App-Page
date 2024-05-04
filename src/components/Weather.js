import { React, useState, useEffect } from "react";

const Weather = (props) => {
  const [temp, setTemp] = useState(100);
  const [icon, setIcon] = useState("null");
  const [country, setCountry] = useState("IN");
  const [name, setName] = useState("New Delhi");

  //363627e31ff984daa7a536bf1d3220b2

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getSuccess);
    }
  });

  const getSuccess = async (position) => {
    const { latitude, longitude } = position.coords;
    // this.setState({ latitude, longitude });
    console.log(props.weatherKey);
    // 363627e31ff984daa7a536bf1d3220b2
    const api = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${props.weatherKey}`
    );
    const data = await api.json();
    // console.log(data);

    setIcon(data.weather[0].icon);
    setTemp(data.main.temp);
    setCountry(data.sys.country);
    setName(data.name);
  };

  // const { temp, icon, name, country } = this.state;
  return (
    <div>
      {
        <div>
          {Math.ceil((temp - 273.15) * 1.8 + 32)} <sup>°F</sup>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt=""
            width={50}
            height={50}
          />
          {name}, {country}
        </div>
      }
    </div>
  );
};

export default Weather;
