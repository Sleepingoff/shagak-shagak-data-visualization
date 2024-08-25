//기본 지도 생성하기

import MapContainer from "../../../components/map/MapContainer";
import TileLayer from "../../../components/map/TileLayer";
import useGeoLocation from "../../../hooks/useGeoLocation";

const Map01 = () => {
  const { loading, position } = useGeoLocation();
  return (
    <main style={{ width: `100%`, height: `100vh` }}>
      <hgroup>
        <h3>기본 지도 가져오기</h3>
        <p>사용자의 현재 위치를 기준으로 기본 지도를 불러옵니다.</p>
      </hgroup>
      {!loading && (
        <MapContainer id="map_1" center={position}>
          <TileLayer
            id="map_1"
            url={"https://tile.openstreetmap.org/{z}/{x}/{y}.png"}
            attribution={"01"}
          />
        </MapContainer>
      )}
    </main>
  );
};

export default Map01;
