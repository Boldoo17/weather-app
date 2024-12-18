"use client";

import { Icon } from "./search.js";
import { Sunny } from "./Sunny.jsx";
import { useEffect, useState } from "react";
import Card from "./card.jsx";
import { Searchinput } from "./components/components.jsx";

const API_KEY = "44795092e69b4245b6882409241312";

export default function Home() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("London");
  const [dayTemp, setDayTemp] = useState("");
  const [nightTemp, setNightTemp] = useState("");
  const [conditions, setConditions] = useState("");
  const [todayDate, setTodayDate] = useState("");

  // const [dayweather, setDayWeather] = useState({
  //   number: 0,
  //   condition: "",
  // });
  // const [nightweather, setNightWeather] = useState({
  //   nothing: 0,
  //   condition: "",
  // });

  const onChangeText = (event) => {
    setSearch(event.target.value);
  };

  const onPressEnter = (e) => {
    if (e.key === "Enter") {
      setCity(search);
    }
  };

  console.log(search);

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1`
    )
      .then((response) => response.json())
      .then((data) => {
        const dayData = data?.forecast?.forecastday[0]?.day;

        console.log(dayData);
        setDayTemp(dayData?.maxtemp_c);
        setNightTemp(dayData?.mintemp_c);
        setConditions(dayData?.condition?.text);
        setTodayDate(data?.forecast?.forecastday[0]?.date);
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }, [city]);

  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-full h-screen rounded-l-[62px] bg-[#F3F4F6] justify-center flex">
          <div className="w-[567px] h-[80px] mt-[40px] bg-[#ffffff] rounded-[48px] flex justify-center items-center absolute z-[3]">
            <Searchinput
              onChangeText={onChangeText}
              onPressEnter={onPressEnter}
            />
          </div>
          <div className="w-[414px] h-[832px] mt-[216px] bg-[#ffffff] rounded-[48px] z-[3]">
            <div className="z-10 w-[205px] h-[205px] bg-[#f3f4f6] rounded-[50%] absolute left-[1180px] top-[580px] flex">
              <img
                className="w-[40px] h-[86px] ml-[45px] my-[50px]"
                src="/left.png"
              />
              <img
                className="w-[40px] h-[86px] ml-[45px] my-[50px] "
                src="/right.png"
              />
            </div>
            <Card
              image={"/Sun.png"}
              condition={conditions}
              temperature={dayTemp}
              value="day"
              city={city}
              todayDate={todayDate}
            />
          </div>
        </div>
        <div className="w-full h-screen rounded-r-[62px] bg-[#0f141e] flex justify-center">
          <div className="w-[414px] h-[832px] mt-[216px] bg-[#111827BF] rounded-[48px] flex   z-[3]">
            <Card
              value="night"
              temperature={nightTemp}
              image={"/moon.png"}
              condition={conditions}
              city={city}
              todayDate={todayDate}
            />
          </div>
        </div>
        <div className="w-[100px] h-[100px] rounded-full bg-white    absolute"></div>
      </div>
      <Sunny />
    </div>
  );
}
