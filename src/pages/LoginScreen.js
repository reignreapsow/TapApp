import React from "react";
import { Redirect, Link } from "react-router-dom";

import Face from "./../imgs/icons/face-24px.svg";
import Fingerprint from "./../imgs/icons/fingerprint-24px.svg";
import Mic from "./../imgs/icons/mic-24px.svg";

import Home from "./Dashboard"; //RENAMED DASHBOARD TO HOME
import logo from "./../imgs/sexy_silhouette_2.png";

import "./../scss/pages/loginScreen.scss";

function login() {
  login ? (
    //Redirect to dashboard on password accept
    <Redirect to={Home} />
  ) : (
    //if password fails reload page
    //TODO set to blank input
    window.location.reload(true)
  );
}

function LoginScreen() {
  return (
    <div className="loginScreen">
      <img className="loginScreen__logo" src={logo} alt="tap-logo" />
      <h1>Login</h1>
      <form>
        <input type="password" maxLength="18" />
        <button
          onClick={login()}
          type="submit"
          value="submit"
          className="loginScreen__btn"
        >
          Login
        </button>
      </form>
      <div className="alt__login">
        <Link to>
          <img
            src={Fingerprint}
            fontSize="large"
            className="quickLogin_btn"
            alt="fingerprint"
          />
        </Link>
        <Link to>
          <img
            src={Face}
            fontSize="large"
            className="quickLogin_btn"
            alt="face"
          />
        </Link>
        <Link to>
          <img
            src={Mic}
            fontSize="large"
            className="quickLogin_btn"
            alt="voice"
          />
        </Link>
      </div>
    </div>
  );
}

export default LoginScreen;
