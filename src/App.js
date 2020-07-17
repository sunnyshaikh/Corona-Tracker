import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      {/* Contents */}
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
