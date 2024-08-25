import * as L from "leaflet";
import useMap from "../../hooks/useMap";
import { useEffect } from "react";

const PopupMarker = ({ latlng: [lat, lng], children, ...props }) => {
  const { value, dispatch } = useMap();

  useEffect(() => {
    if (!value.map) return;
    const currentMarkers = value.marker;

    const isIncludeMarker = currentMarkers.every(
      (mark) => mark.id === props.key
    );

    let newMarkers = currentMarkers;

    const newMarker = {
      id: props.key,
      marker: L.marker([lat, lng]),
    };

    if (isIncludeMarker) {
      newMarkers = currentMarkers.filter((marker) => marker.id != props.key);
    }

    newMarkers.push(newMarker);

    dispatch({
      type: "update",
      value: {
        ...value,
        marker: newMarkers,
      },
    });

    return () => {
      newMarkers = currentMarkers.filter((marker) => marker.id != props.key);
      newMarker.marker.remove();
      dispatch({ type: "update", value: { ...value, marker: newMarkers } });
    };
  }, [value, lat, lng]);

  return (
    <b className="a11y-hidden" {...props}>
      {children}
    </b>
  );
};

export default PopupMarker;
