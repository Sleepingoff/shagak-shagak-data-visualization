import * as L from "leaflet";
import { useEffect } from "react";
import useMarker from "../../hooks/useMarker";

const PopupMarker = ({ latlng: [lat, lng], options, children, ...props }) => {
  const { createMarker, updateMarker, deleteMarker, isIncludeMarker } =
    useMarker();

  const { icon } = options;
  const Icon = L.icon({ iconUrl: icon ?? "../../../public/vite.svg" });

  useEffect(() => {
    let newMarker;

    if (isIncludeMarker(props.key))
      newMarker = updateMarker(props.key, [lat, lng], {
        ...options,
        icon: Icon,
      });
    else
      newMarker = createMarker(props.key, [lat, lng], {
        ...options,
        icon: Icon,
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
    } else {
      console.warn("자식 컴포넌트로 Popup 컴포넌트가 필요합니다.");
    }

    return () => {
      deleteMarker(props.key);
    };
  }, []);

  return (
    <b className="a11y-hidden" {...props}>
      {children}
    </b>
  );
};

export default PopupMarker;
