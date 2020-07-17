import React, { useState, useEffect } from "react";
import "./Hero.css";
import axios from "axios";

function Hero() {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("https://api.covid19api.com/summary");
      setState(req.data.Global);
      return req;
    }
    fetchData();
  }, []);

  return (
    <div className="hero">
      <div className="container">
        <h1>
          Stay <span>Home</span> Stay <span>Safe</span>
          🙏
        </h1>
        <div className="worldwide_status">
          <h2>WorldWide Status</h2>
          <div className="status">
            <div className="detail">
              <h3>Total Confirmed</h3>
              <p className="counter">{state.TotalConfirmed}</p>
            </div>
            <div className="detail">
              <h3>Total Deaths</h3>
              <p className="counter">{state.TotalDeaths}</p>
            </div>
            <div className="detail">
              <h3>Total Recovered</h3>
              <p className="counter">{state.TotalRecovered}</p>
            </div>
          </div>
          <a href="#content">Check Country Status</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
