import React, { useState } from "react";
import "./Navbar.css";
import { GrClose, GrMenu } from "react-icons/gr";
import ResponsiveNavbar from "../responsiveNavbar/ResponsiveNavbar";

const Navbar = ({english}) => {
  const [respNav, setRespNav] = useState(false);
  return (
    <div className="container">
      {!respNav ? (<GrMenu size={20} className="respNav" onClick={() => setRespNav(true)} />) : 
      (<GrClose size={20} className="respNav" onClick={() => setRespNav(false)} />)}
      {respNav ? <ResponsiveNavbar setRespNav={setRespNav}></ResponsiveNavbar> : <></>}
      <nav className= {english == "English" ? "navbarArabic" : "navbarEnglish" }>
        <a href="#">  {english  == "English" ? "الصفحة الرئيسية" : "Home" } </a>
        <a href="#">  {english  == "English" ? "سمات" : "Features" } </a>
        <a href="#">  {english  == "English" ? "الصفحات" : "Pages" } </a>
        <a href="#">  {english  == "English" ? "لقطات" : "Screenshots" } </a>
        <a href="#">  {english  == "English" ? "التسعير" : "Pricing" } </a>
        <a href="#">  {english  == "English" ? "تواصل معنا" : "Contact" } </a>
      </nav>
    </div>
  );
};
export default Navbar;
