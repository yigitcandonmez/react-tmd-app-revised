import { Routes, Route } from "react-router-dom";
import Trending from "./pages/Trending";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
