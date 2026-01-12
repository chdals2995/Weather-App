// WeatherInfo.tsx

import sun from "../../assets/icons/sun.png"
import moon from "../../assets/icons/moon.png"
import clouds from "../../assets/icons/clouds.png"
import rain from "../../assets/icons/rain.png"
import thunder from "../../assets/icons/thunder.png"
import snow from "../../assets/icons/snow.png"

type WeatherInfoProps = {
  city: string;
  alias?: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  main: string;
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

export default function WeatherInfo({
  alias,
  temp,
  tempMin,
  tempMax,
  main,
}: WeatherInfoProps) {
    return(
        <div className="flex justify-between p-2 h-35">
            {/* 현재 위치의 날씨 표시 */}
            <div className="w-65 relative">
                <span className="position left-2">
                    {tempMin}°c / {tempMax}°c
                </span>
                {alias ? (
                  <span className="font-bold text-lg block text-center">{alias}</span>
                ) : (
                  <span className="font-bold text-lg block text-center">di</span>
                )}
            </div>
            <div className="w-30">
                <img src={mapWeatherMainToIcon(main)} alt={main} 
                className="w-10 block mx-auto"/>
                <span className="block text-center font-bold text-6xl">{temp}°</span>
            </div>
        </div>
    );
}