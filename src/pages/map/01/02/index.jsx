import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const Map0102 = () => {
  const codeUseMap = `
import { createContext, useContext } from "react";

export const LeafletContext = createContext(null);

const useMap = () => {
  const value = useContext(LeafletContext);

  return value;
};

export default useMap;

    `;

  const codeUseGeoLocation = `
import { useEffect, useState } from "react";

const useGeoLocation = () => {
  const [loading, setLoading] = useState(true);
  const [position, setPosition] = useState([]);

  const onSuccess = (position) => {
    const currentPosition = position.coords;
    setPosition([currentPosition.latitude, currentPosition.longitude]);
    setLoading(false);
  };

  const onError = (error) => {
    console.log(\`ERROR(\${error.code}): \${error.message}\`);
    setLoading(true);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return { position, loading };
};

export default useGeoLocation;

    `;
  return (
    <main>
      01-2 hooks
      <SyntaxHighlighter>{codeUseMap}</SyntaxHighlighter>
      <SyntaxHighlighter>{codeUseGeoLocation}</SyntaxHighlighter>
    </main>
  );
};

export default Map0102;
