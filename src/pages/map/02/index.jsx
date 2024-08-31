import DefaultMarker from "../../../components/map/DefaultMarker";
import MapContainer from "../../../components/map/MapContainer";
import TileLayer from "../../../components/map/TileLayer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import useGeoLocation from "../../../hooks/useGeoLocation";
const Map02 = () => {
  const { loading, position } = useGeoLocation();
  const code = `
    <MapContainer id="map_2" center={position}>
      <TileLayer
        id="map_2"
        url={
          "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
        }
        attribution={"02"}
      />
      <DefaultMarker latlng={position} />
    </MapContainer>
  `;
  return (
    <main>
      <hgroup>
        <h3>현재 위치에 마커 표시하기</h3>
      </hgroup>
      <div style={{ width: `100%`, height: `50vh` }}>
        {!loading && (
          <MapContainer id="map_2" center={position}>
            <TileLayer
              id="map_2"
              url={
                "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
              }
              attribution={"02"}
            />
            <DefaultMarker latlng={position} />
          </MapContainer>
        )}
      </div>
      <SyntaxHighlighter language="jsx">{code}</SyntaxHighlighter>
    </main>
  );
};

export default Map02;
