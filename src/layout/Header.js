import React from "react";
import { Link } from "react-router-dom";
import { requests } from "../services/requests";
import { requestNameUpper } from "../utils/requestNameUpper";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
          {requests.map((e) => {
            const name = requestNameUpper(e.name);
            return (
              <Link to={e.name} key={e.name}>
                {name}
              </Link>
            );
          })}
        </li>
      </ul>
    </header>
  );
};

export default Header;
