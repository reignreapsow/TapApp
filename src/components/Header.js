import React from "react";
import "./../scss/components/Header.scss";
import logo from "./../imgs/sexy_silhouette_2.png";

function Header() {
  return (
    <header>
      <h2>
        <img className="header__logo" alt="logo" src={logo} />
        TAP(APP)
      </h2>
    </header>
  );
};

export default Header;
