import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import useGeoLocation from "../../../../hooks/useGeoLocation";
import MapContainer from "../../../../components/map/MapContainer";
import TileLayer from "../../../../components/map/TileLayer";

const Map0101 = () => {
  const { loading, position } = useGeoLocation();
  const code = `
  <MapContainer id="map_1" center={position}>
    <TileLayer
      id="map_1"
      url={"https://tile.openstreetmap.org/{z}/{x}/{y}.png"}
    />
  </MapContainer>`;
  return (
    <main>
      <hgroup>
        <h3>기본 지도 가져오기</h3>
        <p>사용자의 현재 위치를 기준으로 기본 지도를 불러옵니다.</p>
      </hgroup>
      <div style={{ width: `100%`, height: `50vh` }}>
        {!loading && (
          <MapContainer id="map_1" center={position}>
            <TileLayer
              id="map_1"
              url={"https://tile.openstreetmap.org/{z}/{x}/{y}.png"}
              attribution={"01"}
            />
          </MapContainer>
        )}
      </div>
      <SyntaxHighlighter language="jsx">{code}</SyntaxHighlighter>
    </main>
  );
};

export default Map0101;
