import { Routes, Route, useLocation } from "react-router-dom";
import MovieList from "./layout/MovieList";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./pages/Home";
import { findRequestEndPoint } from "./utils/findRequestEndPoint";

const App = () => {
  let { pathname } = useLocation();
  const endpoint = findRequestEndPoint(pathname);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {endpoint.name !== "*" && (
          <Route
            path={endpoint.name}
            element={<MovieList endpoint={endpoint.url} />}
          />
        )}
        <Route path={endpoint.name} element={<div>Hatalı URL</div>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
