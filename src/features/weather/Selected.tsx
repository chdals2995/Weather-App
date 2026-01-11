type SelectedProps = {
  location?: string | null;
};

export default function Selected({location}:SelectedProps){
    if(!location){
        return <div>해당 장소의 정보가 제공되지 않습니다.</div>;
    }
    return(
        <div>
            검색 위치 날씨 표시
        </div>
    );
}