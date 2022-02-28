import { Routes, Route, useLocation } from "react-router-dom";
import MovieList from "./layout/MovieList";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./pages/Home";
import { findRequestEndPoint } from "./utils/findRequestEndPoint";
import { requests } from "./services/requests";

const App = () => {
  let location = useLocation();
  const endpoint = findRequestEndPoint(location.pathname, requests);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path={endpoint.name}
          element={<MovieList endpoint={endpoint.url} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
