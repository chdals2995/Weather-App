import { useState } from "react";
import search from "../../assets/icons/search.png";

export default function SeachBar(){
    const[keyword, setkeyword]=useState("");

    const searching = () => {
        console.log("검색어",keyword);
    }


    return(
        <div className="h-full px-5 flex justify-center items-center">
            <input type="text"
                placeholder="위치를 입력하세요" 
                className="block h-10 flex-1 min-w-40 px-2 border-blue-200 border-2 rounded-3xl"
                value={keyword}
                onChange={(e)=>setkeyword(e.target.value)}/>
            <button type="button" className="cursor-pointer"
                onClick={searching}>
                <img src={search} alt="검색"/>
            </button>
        </div>
    );
}