import React from "react";
import { Link } from "react-router-dom";
import { requests } from "../services/requests";
import { requestNameUpper } from "../utils/requestNameUpper";
import Logo from "../images/logo.png";
import Batman from "../images/batman.jpg";

const Header = () => {
  return (
    <div className="header relative">
      <header
        className="flex items-center pt-3 pb-3  z-10 relative"
        style={{
          backgroundColor: "#F4D03F",
          backgroundImage: "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)",
        }}
      >
        <img src={Logo} alt="logo" className="w-52 h-30" />
        <ul className="pl-5">
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
            {requests.map((e) => {
              const name = requestNameUpper(e.name);
              return (
                <Link to={e.name} key={e.name} className="text-white pl-2">
                  {name}
                </Link>
              );
            })}
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
