// SearchBar.tsx

import { useState } from "react";
import search from "../../assets/icons/search.png";
import districts from "../../shared/korea_districts.json";

type SearchBarProps = {
  onSearch: (keyword: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps){
    const[keyword, setKeyword] = useState("");
    const [filtered, setFiltered] = useState<string[]>([]); /* 문자열 배열 */

    const handleSearch = (value: string) => {
    setKeyword(value);  /* 인풋 입력 값 상태로 저장 */

    // 값이 없으면 빈 상태로 저장
    if (!value) {
      setFiltered([]);
      return;
    }

    // 검색 필터 기능
    const result = districts
      .filter((loc) => loc.includes(value))

    setFiltered(result);
  };

    return(
            <div className="mt-1.5 px-5 flex justify-center items-center relative">
                {/* 검색창 */}
                <input type="text"
                    placeholder="위치를 입력하세요" 
                    value={keyword}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="block h-10 flex-1 min-w-40 px-4 border-blue-200 border-2 rounded-3xl
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                    />
                <button type="button" className="cursor-pointer w-10 h-10"
                    onClick={()=> onSearch(keyword)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            onSearch(keyword);
                        }
                    }}>
                    <img src={search} alt="검색"/>
                </button>
                {/* 추천 검색어 */}
                {filtered.length > 0 && (
                    <ul className="absolute top-full left-9 right-16.5 z-5 flex-1 min-w-40 bg-white 
                    border-blue-400 border-t-0 border
                    max-h-40 overflow-y-auto">
                        {filtered.map((loc) => (
                            <li
                            key={loc}
                            onClick={() => {
                                onSearch(loc);
                                setFiltered([]);
                                setKeyword(loc);
                            }}
                            className="cursor-pointer px-2 py-1 hover:bg-blue-200"
                            >
                            {loc}
                            </li>
                        ))}
                        {/* 해당하는 장소가 없을 때 */}
                        {keyword && filtered.length === 0 && (
                        <li className="cursor-pointer px-2 py-1 hover:bg-blue-200">
                            해당 장소의 정보가 제공되지 않습니다.
                        </li>
                        )}
                    </ul>
                )}
            </div>
    );
}