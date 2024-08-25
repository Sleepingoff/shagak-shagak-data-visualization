import * as L from "leaflet";
import useMap from "./useMap";
import { useEffect, useState } from "react";

const useMarker = () => {
  const { value, dispatch } = useMap();

  const currentMarkers = [...value.marker];
  const [markers, setMarkers] = useState(currentMarkers);

  useEffect(() => {
    dispatch({ type: "update", value: { ...value, marker: markers } });
  }, [dispatch, markers, value]);

  const isIncludeMarker = (markerId) =>
    !currentMarkers.every((marker) => marker.id != markerId);
  const findMarker = (markerId) =>
    currentMarkers.filter((marker) => marker.id === markerId)[0];
  const exceptMarkers = (markerId) =>
    currentMarkers.filter((marker) => marker.id != markerId);

  const createMarker = (markerId, [lat, lng], options) => {
    if (isIncludeMarker(markerId)) {
      console.log("중복된 id의 마커가 있습니다.");
      return findMarker(markerId);
    }
    const newMarker = {
      id: markerId,
      marker: L.marker([lat, lng], options),
    };
    setMarkers((prev) => [...prev, newMarker]);
    return newMarker;
  };

  const updateMarker = (markerId, [lat, lng], options) => {
    const targetMarker = findMarker(markerId);
    const currentOptions = targetMarker.marker.options;
    const copyMarker = {
      ...targetMarker,
      marker: L.marker([lat, lng], options ? options : currentOptions),
    };
    const otherMarkers = exceptMarkers(markerId);
    setMarkers([...otherMarkers, copyMarker]);
    return copyMarker;
  };

  const deleteMarker = (markerId) => {
    const targetMarker = findMarker(markerId);
    const otherMarkers = exceptMarkers(markerId);
    targetMarker && targetMarker.marker.remove();
    setMarkers([...otherMarkers]);
    return otherMarkers;
  };

  return {
    createMarker,
    updateMarker,
    deleteMarker,
    isIncludeMarker,
    findMarker,
    exceptMarkers,
  };
};

export default useMarker;
