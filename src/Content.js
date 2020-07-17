import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Content.css";

function Content() {
  const [state, setstate] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("https://api.covid19api.com/summary");
      setstate(req.data.Countries);
      return req;
    }
    fetchData();
  }, []);

  return (
    <div id="content" className="content">
      <a href="#content" title="go to country status">
        ^
      </a>
      <h1>Country Status</h1>
      <p style={{ textAlign: "center", marginBottom: ".5rem" }}>
        {state.length} results found
      </p>
      <div className="table">
        <table cellSpacing="0">
          <thead>
            <tr>
              <th>Country</th>
              <th>New Confirmed</th>
              <th>Total Confirmed</th>
              <th>New Deaths</th>
              <th>Total Deaths</th>
              <th>New Recovered</th>
              <th>Total Recovered</th>
            </tr>
          </thead>
          <tbody>
            {state.map((st) => (
              <tr key={st.CountryCode}>
                <td style={{ color: "#ccc" }}>{st.Country}</td>
                <td style={{ color: "orange" }}>{st.NewConfirmed}</td>
                <td style={{ color: "orange" }}>{st.TotalConfirmed}</td>
                <td style={{ color: "#f00" }}>{st.NewDeaths}</td>
                <td style={{ color: "#f00" }}>{st.TotalDeaths}</td>
                <td style={{ color: "#0f0" }}>{st.NewRecovered}</td>
                <td style={{ color: "#0f0" }}>{st.TotalRecovered}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Content;
