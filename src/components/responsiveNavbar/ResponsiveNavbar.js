import React from "react";
import "./ResponsiveNavbar.css";

const ResponsiveNavbar = ({ setRespNav }) => {
  return (
    <div className="menuContainer">
    <div onClick={() => setRespNav(false)}>
      <li>Home</li>
    </div>
    <div onClick={() => setRespNav(false)}>
      <li>Features</li>
    </div>
    <div onClick={() => setRespNav(false)}>
      <li>Pages</li>
    </div>
    <div onClick={() => setRespNav(false)}>
      <li>Screenshots</li>
    </div>
    <div onClick={() => setRespNav(false)}>
      <li>Pricing</li>
    </div>
    <div onClick={() => setRespNav(false)}>
      <li>Contact</li>
    </div>
  </div>
  );
};

export default ResponsiveNavbar;
