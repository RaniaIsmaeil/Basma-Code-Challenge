import React, { useState } from "react";
import Application from "../components/Application/Application";
import Arrow from "../components/Arrow/Arrow";
import CodeChallenge from "../components/CodeChallenge/CodeChallenge";
import Contact from "../components/Contact/Contact";
import Language from "../components/Language/Language";
import Navbar from '../components/Navbar/Navbar';
import Pricing from "../components/Pricing/Pricing";
import SetupSteps from "../components/SetupSteps/SetupSteps";
import SharePhotos from "../components/SharePhotos/SharePhotos";
import Start from "../components/Start/Start";
import Subscribe from "../components/Subscribe/Subscribe";
import Tools from "../components/Tools/Tools";

const Home = () => {
  const [language, setLanguage] = useState("عربي");

  return (
    <div>
        <div className={language =="English" ? "polyArabic" : "poly"}/>
        <Arrow />
        <Language lang={language} click={() => {
          if(language == "English"){
            setLanguage("عربي")
          } else{
            setLanguage("English")
          }
        }}/>
        <Navbar english = {language}/>
        <Start english = {language} />
        <CodeChallenge english = {language}/>
        <Tools english = {language} />
        <SharePhotos english={language}/>
        <SetupSteps english={language}/>
        <Pricing english={language}/>
        <Application english={language}/>
        <Subscribe english={language}/>
        <Contact english={language}/>
    </div>
  ) 
}
export default Home
