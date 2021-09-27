import React from "react";
import { Link } from "react-router-dom";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="header">
      <div className="container container--header">
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>
        <div className="theme-box" onClick={() => setDarkMode(!darkMode)}>
          <i
            className={`theme-box__icon ${darkMode ? "fas" : "far"} fa-moon`}
          ></i>
          <p className="theme-box__text">Dark Mode</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
