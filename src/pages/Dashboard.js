import React from "react";

// import Header from "./../components/Header";
import Nav from "./../components/Nav";

import "./../scss/pages/Dashboard.scss";

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard Page</h2>
      {/* <Header /> */}
      <Nav />
    </div>
  );
}

export default Dashboard;
