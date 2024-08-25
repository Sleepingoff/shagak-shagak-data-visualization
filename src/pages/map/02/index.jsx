import DefaultMarker from "../../../components/map/DefaultMarker";
import MapContainer from "../../../components/map/MapContainer";
import TileLayer from "../../../components/map/TileLayer";

import useGeoLocation from "../../../hooks/useGeoLocation";
const Map02 = () => {
  const { loading, position } = useGeoLocation();
  return (
    <main style={{ width: `100%`, height: `100vh` }}>
      <hgroup>
        <h3>현재 위치에 마커 표시하기</h3>
      </hgroup>
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
    </main>
  );
};

export default Map02;
