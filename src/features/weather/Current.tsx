import { useEffect, useState } from "react";
import { getCurrentByCoord } from "../../shared/weather";

type WeatherData = {
  name: string; // 도시 이름
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: {
    id: number;
    main: string;
  }[];
};

export default function Current(){
    return(
        <div>

        </div>
    );
}