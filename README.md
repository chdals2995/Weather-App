# Weather App

React + TypeScript + Vite로 만든 간단한 날씨 앱 프로젝트입니다.

---

## 1. 프로젝트 실행 방법

```bash
# 레포지토리 클론
git clone https://github.com/chdals2995/weather-app

# 프로젝트 폴더 이동
cd Weather-App

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:5173`을 열면 앱을 확인할 수 있습니다.

---

## 2. 구현한 기능

- 사용자의 현재 위치 날씨 조회
- 도시 검색 후 날씨 조회
- 즐겨찾기 등록, 수정, 삭제
- 즐겨찾기 목록에서 선택 시 상세 날씨 표시
- 시간대별 24시간 날씨 확인
- 즐겨찾기 목록에서 별칭 사용 가능

---

## 3. 기술적 의사결정 및 이유

- **React + TypeScript**: 컴포넌트 기반 개발과 타입 안전성을 위해 선택  
- **Vite**: 빠른 빌드 및 HMR 지원으로 개발 효율 향상  
- **OpenWeatherMap API**: 무료 API를 사용하여 신뢰성 있는 날씨 데이터 제공  
- **로컬스토리지 사용**: 즐겨찾기 상태를 간단하게 저장하고 유지하기 위해 선택  
- **TailwindCSS**: 최소한의 CSS 작업으로 빠른 UI 구성 가능

---

## 4. 기술 스택

- React 18
- TypeScript
- Vite
- TailwindCSS
- OpenWeatherMap API

---

## 5. 제출

- GitHub Repository (Public): (https://github.com/chdals2995/weather-app)  
- 배포 URL (Vercel / Netlify 등): <YOUR_DEPLOY_URL>
