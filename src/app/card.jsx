"use client";

import Image from "next/image";
export default function WeatherCard(props) {
  console.log(props);
  return (
    <div className="flex  flex-col ml-[48px]">
      <div className="flex gap-[100px] items-center  mt-[64px]">
        <div>
          <div className="text-[18px] text-gray-500 ">{props.todayDate}</div>
          <div className="text-[48px] text-black ">{props.city}</div>
        </div>
        <div>
          <Image src={"/Pin.png"} alt="" width={32} height={32} />
        </div>
      </div>
      <div>
        <Image src={props.image} alt="" width={275} height={275} />
      </div>

      <div className="text-[144px]"> {props.temperature}</div>
      <div className="text-[24px] text-[#FF8E27] font-bold">
        {props.condition}
      </div>

      <div className="flex justify-between w-[318px] h-[32px] mt-[40px]">
        <Image src={"/Home.png"} alt="" width={32} height={32} />
        <Image src={"/Pin.png"} alt="" width={32} height={32} />
        <Image src={"/Heart.png"} alt="" width={32} height={32} />
        <Image src={"/User.png"} alt="" width={32} height={32} />
      </div>
    </div>
  );
}

export function Card({ value, city, weather, forecastDate }) {
  const isDay = value === "day";
  const [dayStatus, setDayStatus] = useState("/Sun.png");
  const [nightStatus, setNightStatus] = useState("/moon.png");
  const weatherStatus = isDay ? dayStatus : nightStatus;
  const { number, condition } = weather;

  useEffect(() => {
    if (isDay) {
      if (condition.includes("Sunny")) {
        setDayStatus("/Sun.png");
      } else if (condition.includes("Overcast")) {
        setDayStatus("/Clouds.png");
      } else if (condition.includes("snow")) {
        setDayStatus("/Snow.png");
      } else if (condition.includes("rain")) {
        setDayStatus("/Rain.png");
      } else if (condition.includes("thunder")) {
        setDayStatus("/sunelec.png");
      } else if (condition.includes("wind")) {
        setDayStatus("/Wind.png");
      } else if (condition.includes("Mist")) {
        setDayStatus("/Clouds.png");
      } else if (condition.includes("Cloudy")) {
        setDayStatus("/Clouds.png");
      }
    } else {
      if (condition.includes("Clear")) {
        setNightStatus("/moon.png");
      } else if (condition.includes("Overcast")) {
        setNightStatus("/Clouds(1).png");
      } else if (condition.includes("snow")) {
        setNightStatus("/Snownight.png");
      } else if (condition.includes("rain")) {
        setNightStatus("/Rainnight.png");
      } else if (condition.includes("thunder")) {
        setNightStatus("/nightelec.png");
      } else if (condition.includes("wind")) {
        setNightStatus("/NightWind.png");
      } else if (condition.includes("Cloudy")) {
        setNightStatus("/Clouds(1).png");
      }
    }
  }, [city, condition]);

  // let image = "/SUN.png";
  // let imageNight = "/moon.png";

  // if (value === "day") {
  //   if (conditions.includes("Sunny")) {
  //     image = "/SUN.png";
  //   } else if (conditions.includes("Overcast")) {
  //     image = "/cloud.png";
  //   } else if (conditions.includes("snow")) {
  //     image = "/Snow.png";
  //   } else if (conditions.includes("rain")) {
  //     image = "/sunnyPic.png";
  //   } else if (conditions.includes("thunder")) {
  //     image = "/light.png";
  //   } else if (conditions.includes("wind")) {
  //     image = "/Wind.png";
  //   } else if (conditions.includes("Mist")) {
  //     image = "/cloud.png";
  //   } else if (conditions.includes("Cloudy")) {
  //     image = "/cloud.png";
  //   }
  // } else {
  //   if (conditions.includes("Clear")) {
  //     imageNight = "/moon.png";
  //   } else if (conditions.includes("Overcast")) {
  //     console.log(conditions, "----");

  //     imageNight = "/NightClouds.png";
  //   } else if (conditions.includes("snow")) {
  //     imageNight = "/NightSnow.png";
  //   } else if (conditions.includes("rain")) {
  //     imageNight = "/NightRain.png";
  //   } else if (conditions.includes("thunder")) {
  //     imageNight = "/light (2.png";
  //   } else if (conditions.includes("wind")) {
  //     imageNight = "/NightWind.png";
  //   } else if (conditions.includes("Cloudy")) {
  //     imageNight = "/NightClouds.png";
  //   }
  // }

  // const img = value === "day" ? image : imageNight;
  const temperatureStyle = isDay
    ? "text-[144px] text-transparent bg-clip-text bg-gradient-to-b from-[#111827] to-[#6b7280] font-3xl"
    : "text-[144px] text-transparent bg-clip-text bg-gradient-to-b from-[#F9FAFB] to-[#F9FAFB00] font-3xl";

  const conditionStyle = isDay
    ? "text-[#FF8E27] font-2xl"
    : "text-[#777CCE] font-2xl";

  const cardBg = isDay ? "bg-[#FFFFFFbf]" : "bg-[#111827BF]";
  const nightCardColors =
    "bg-[111827bf] bg-gradient-to-b from-[#1F2937] to-[#11182700] text-white shadow-[#111827]";
  const colors = isDay ? "bg-[#FFFFFF]" : nightCardColors;

  return (
    <div
      className={`w-[414px] h-[832px] rounded-[48px] flex justify-center ${cardBg} z-30 overflow-hidden`}
    >
      <div className={`w-[398px] h-[504px] rounded-[42px] ${colors}`}>
        <div className="flex justify-center">
          <div className="w-[290px] mt-[64px] ml-[48px]">
            <p className="text-md">{forecastDate || "Date Unavailable"}</p>
            <h2 className="text-4xl font-bold">{city || "Unknown"}</h2>
          </div>
        </div>
        <div className="flex justify-center items-center mt-[30px]">
          <img
            className="h-[200px] w-[200px]"
            src={weatherStatus}
            alt={value}
          />
        </div>
        <div className="flex justify-center items-center mr-32 mt-[30px]">
          <p className={temperatureStyle}>{number || ""}°</p>
        </div>
        <div className="mt-[30px] ml-[50px]">
          <p className={conditionStyle}>{condition || "No Data"}</p>
        </div>
        <div className="flex justify-center items-center mt-24 gap-20">
          <Icons value={value} />
        </div>
      </div>
    </div>
  );
}
