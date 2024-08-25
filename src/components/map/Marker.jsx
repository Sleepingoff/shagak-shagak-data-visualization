import * as L from "leaflet";
import useMap from "../../hooks/useMap";
import { useEffect } from "react";

const Marker = ({ latlng: [lat, lng], icon, children, ...props }) => {
  const { value, dispatch } = useMap();

  useEffect(() => {
    if (!value.map) return;
    const currentMarkers = value.marker;

    const isIncludeMarker = currentMarkers.every(
      (mark) => mark.id === props.key
    );
    const Icon = L.icon({ iconUrl: icon ?? "../../../public/vite.svg" });

    let newMarkers = currentMarkers;

    const newMarker = {
      id: props.key,
      marker: L.marker([lat, lng], { icon: Icon }),
    };

    if (isIncludeMarker) {
      newMarkers = currentMarkers.filter((marker) => marker.id != props.key);
    }

    newMarkers.push(newMarker);
    console.log(newMarker.marker.options);
    dispatch({
      type: "update",
      value: {
        ...value,
        marker: newMarkers,
      },
    });

    //popup 또는 tooltip 추가
    if (children) {
      if (typeof children !== "string" && children.length > 0) {
        children.map((child) => {
          if (child.type?.name === "Popup") newMarker.marker.bindPopup(child);
          else newMarker.marker.bindTooltip(child);
        });
      } else {
        newMarker.marker.bindTooltip(children);
      }
    }

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

export default Marker;
