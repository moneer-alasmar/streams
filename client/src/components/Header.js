import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        StreamEZ
      </Link>
      <div className="right menu">
        <Link to="/" className="item" />
      </div>
    </div>
  );
};

export default Header;
