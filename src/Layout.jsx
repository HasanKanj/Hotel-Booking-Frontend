import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Loader from "./Components/Loader/Loader";

export default function Layout() {
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
    <div className="p-4 flex flex-col min-h-screen">
      <Header />
      {showLoader && (
        <div className="loader-container">
          <div className="loader" />
        </div>
      )}
      <Outlet />
      <Loader />
    </div>
  );
}
