// HourlyWeather.tsx

import sun from "../../assets/icons/sun.png"
import moon from "../../assets/icons/moon.png"
import clouds from "../../assets/icons/clouds.png"
import rain from "../../assets/icons/rain.png"
import thunder from "../../assets/icons/thunder.png"
import snow from "../../assets/icons/snow.png"

type HourlyItem = {
  time: string;
  temp: number;
  main: string;
};

type HourlyWeatherProps = {
  hourly: HourlyItem[];
};

// 아이콘
function mapWeatherMainToIcon(main: string, isDay: boolean = true) {
  switch (main) {
    case "Clear":
      return isDay ? sun : moon;
    case "Clouds":
      return clouds;
    case "Rain":
    case "Drizzle":
      return rain;
    case "Snow":
      return snow;
    case "Thunderstorm":
      return thunder;
    case "Mist":
    case "Fog":
    case "Haze":
      return clouds;
    default:
      return sun;
  }
}

export default function HourlyWeather({ hourly }: HourlyWeatherProps) {
  return (
    <ul className="w-full flex justify-around">
      {hourly.map((item,idx) => (
        <li key={`${item.time}-${idx}`}
        className="border border-blue-400 flex-col justify-between flex-1 h-24">
          <span className="block text-center">{item.time}</span>
          <img
            src={mapWeatherMainToIcon(item.main)} alt={item.time} 
            className="block mx-auto"
          />
          <span className="block text-center ">{item.temp}°</span>
        </li>
      ))}
    </ul>
  );
}