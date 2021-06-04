import React from "react";
import TradeList from "../components/TradeList";
import Auth from "../utils/auth";

const Home = () => {
  if (!Auth.loggedIn()) {
  return (
    <div id="welcomecontent" className="container">
      <h2>Welcome to your Forex Journal</h2>
      <p>Please sign in to get started</p>
    </div>
  );
  }
  else {
    return (
      <TradeList/>
    )
  }
};

export default Home
