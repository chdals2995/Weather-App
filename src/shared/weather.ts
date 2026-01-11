const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data";
// openweathermap api기본 주소 - 유지보수를 위해 공통 도메인 분리

if (!API_KEY) {
  console.error("❌ VITE_WEATHER_API_KEY가 없습니다 (.env 확인)");
}

// 현재 위치(위도, 경도) 기준 현재 날씨
export async function getCurrentByCoord(lat: number, lon: number ) {

  const res = await fetch(

    `${BASE_URL}/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );    // 위도(lat), 경도(lon), 섭씨 단위(metric), API 키

  if (!res.ok) {
    throw new Error("현재 위치 날씨 조회 실패");
  }

  return res.json();
}

// 도시명 기준 현재 날씨 (검색 / 즐겨찾기용)
export async function getCurrentByCity(city: string) {
  const res = await fetch(
    `${BASE_URL}/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("해당 위치 날씨 조회 실패");
  }

  return res.json();
}

// 위치 기준 시간대별 날씨
export async function getHourlyByCoord(lat: number, lon: number) {
  const res = await fetch(
    `${BASE_URL}/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,alerts&appid=${API_KEY}`
  );    // exclude: 필요 없는 데이터 제외 (용량 줄이기)

  if (!res.ok) {
    throw new Error("시간대별 날씨 조회 실패");
  }

  return res.json();
}
