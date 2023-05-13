import { useState, useEffect } from "react";

export default function Loader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {showLoader && (
        <div className="loader-container">
          <div className="loader" />
        </div>
      )}
    </>
  );
}
