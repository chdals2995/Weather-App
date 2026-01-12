// BookmarkButton.tsx

import { useState, useEffect } from "react";
import { toggleBookmark, isBookmarked} from "./Bookmark";
import type { BookmarkItem } from "./Bookmark";
import bookmark from "../../assets/icons/bookmark.png"
import fillMark from "../../assets/icons/fill_bookmark.png"

type BookmarkButtonProps = {
  city: string;
  lat?: number;
  lon?: number;
};

export default function BookmarkButton({ city, lat = 0, lon = 0 }: BookmarkButtonProps) {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    // 현재 도시가 즐겨찾기에 있는지 확인
    setBookmarked(isBookmarked(city));
  }, [city]);

  const handleToggle = () => {
    const item: BookmarkItem = { city, lat, lon };
    toggleBookmark(item); // Bookmark.ts에 구현된 toggle 함수 사용
    setBookmarked(isBookmarked(city)); // 상태 갱신
  };

  return (
    <button onClick={handleToggle}>
      <img 
        src={bookmarked ? fillMark : bookmark} 
        alt={bookmarked ? "즐겨찾기 됨" : "즐겨찾기 안됨"} 
        style={{ width: 24, height: 24 }}
      />
    </button>
  );
}
