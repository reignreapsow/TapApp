import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//# COMPONENTS
// import Header from "./components/Header.js";
// import Nav from './components/Nav.js';
import LoginScreen from "./pages/LoginScreen";
import BrowseScreen from "./pages/BrowseScreen";
import Match from "./pages/Match";
import Settings from "./pages/Settings";
import SignUp from "./pages/Signup";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
//# IMAGES


//# STYLES
import "./scss/App.scss";

//# ROUTES

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/browse">
            <BrowseScreen />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/match">
            <Match />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/home">
            <Dashboard />
          </Route>
          <Route path="/">
            <LoginScreen />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
