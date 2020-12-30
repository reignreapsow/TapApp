import React from "react";
import { Redirect } from "react-router-dom";


import {RecordVoiceOver, Face, Fingerprint } from "@material-ui/icons";

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
      <img className="loginScreen__logo"  src={logo} alt="tap-logo" />
      <h1>Login</h1>
      <form>
        <input type="password" maxLength="18"  />
        <button onClick={login()} type="submit" value="submit" className="loginScreen__btn" >Login</button>
      </form>
      <div className="alt__login">
        <img
          src={Fingerprint}
          fontSize="large"
          className="fingerPrintScanner"
          alt="fingerprint"
        />
        <img src={Face}
        fontSize="large" 
        className="faceScan" 
        alt="face" 

        />
        <img 
            src={RecordVoiceOver}
            fontSize="large" 
            className="voiceCheck" 
            alt="voice" 
            />
      </div>
    </div>
  );
}

export default LoginScreen;
