import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "./Loading";

const RouteLoader = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // 500-800ms feels premium

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <Loading text="Preparing your experience" />;
  }

  return <Outlet />;
};

export default RouteLoader;