import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { findRequestEndPoint } from "./utils/findRequestEndPoint";
import MovieList from "./layout/MovieList";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./pages/Home";
import "./index.css";

const App = () => {
  const [endPoint, setEndPoint] = useState();

  let { pathname } = useLocation();
  const url = findRequestEndPoint(pathname);

  useEffect(() => {
    setEndPoint(url);
  }, [pathname, setEndPoint]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App container mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {endPoint?.name !== "*" && (
          <Route
            path={endPoint?.name}
            element={<MovieList endpoint={endPoint?.url} title={pathname} />}
          />
        )}
        <Route path={endPoint?.name} element={<div>Hatalı URL</div>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
