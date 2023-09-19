import React from "react";
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";    
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/service" Component={Service}/>
        <Route path="/about" Component={About}/>
        <Route path="/contact" Component={Contact}/> 
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
