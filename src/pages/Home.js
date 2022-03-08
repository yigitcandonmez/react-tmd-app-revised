import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  useEffect(() => {
    navigate("/trending");
  }, []);

  return <div>Hoş geldiniz!</div>;
};

export default Home;
