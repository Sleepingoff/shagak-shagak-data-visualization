import { useEffect } from "react";
import useMarker from "../../hooks/useMarker";

const DefaultMarker = ({
  latlng: [lat, lng],
  options = {},
  children,
  ...props
}) => {
  const { createMarker, updateMarker, deleteMarker, isIncludeMarker } =
    useMarker();

  useEffect(() => {
    if (isIncludeMarker(props.key))
      updateMarker(props.key, [lat, lng], options);
    else createMarker(props.key, [lat, lng], options);

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

export default DefaultMarker;
