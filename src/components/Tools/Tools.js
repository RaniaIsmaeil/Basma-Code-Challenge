import React from 'react';
import "./Tools.css"
import Image from "../../assets/thumb-2 (1).png";
import {BsFillBellFill,BsFillCameraVideoFill, BsFillEnvelopeOpenFill} from "react-icons/bs";

const Tool = ({ text, tooleng }) => {
    return (
    <div className= {tooleng == "English" ? "toolContainerArabic" : "toolContainer"}>
        <svg  class={tooleng == "English" ? "svg-inline--fa fa-check fa-w-16 toolCheckIconArabic" : "svg-inline--fa fa-check fa-w-16 toolCheckIcon" }
         aria-hidden="true" 
         focusable="false"
         data-prefix="fas" 
         data-icon="check" 
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 512 512" 
         data-fa-i2svg="">
        <path fill="#6B2CE2" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
        </path>
        </svg>
        <span className="paragraphTitle">{text}</span>
      </div>
    );
    };
    
    const ToolsInformation = ({ toolsEnglish }) => {
    return (
      <div className="infoContainer">
        <h1 className={toolsEnglish == "English" ? "codeChallengeTitlaeArabic" : "codeChallengeTitle"} >
         {toolsEnglish == "English" ? "اعمل بشكل أسرع باستخدام الأدوات القوية" : "Work faster with powerful tools."}
        </h1>
        <Tool
          text={toolsEnglish == "English" ? "بدمجها مع حفنة من تراكيب الجملة النموذجية تبدو معقولة" : "Combined with a handful of model sentence structures looks reasonable"}
        />
        <br />
        <Tool
        text={toolsEnglish == "English" ? "بدمجها مع حفنة من تراكيب الجملة النموذجية تبدو معقولة" : "Combined with a handful of model sentence structures looks reasonable"}
        />
      <br />
      <Tool
        text={toolsEnglish == "English" ? "بدمجها مع حفنة من تراكيب الجملة النموذجية تبدو معقولة" : "Combined with a handful of model sentence structures looks reasonable"}
        />
      <br />
      <Tool
        text={toolsEnglish == "English" ? "بدمجها مع حفنة من تراكيب الجملة النموذجية تبدو معقولة" : "Combined with a handful of model sentence structures looks reasonable"}
        />
      <br />
      <Tool
        text={toolsEnglish == "English" ? "بدمجها مع حفنة من تراكيب الجملة النموذجية تبدو معقولة" : "Combined with a handful of model sentence structures looks reasonable"}
        />
      <br />
        <div className="iconButtonContainer">
        <button className="iconButtons">{React.createElement(BsFillBellFill)}</button>
        <button className="iconButtons">{React.createElement(BsFillEnvelopeOpenFill)}</button>
        <button className="iconButtons">{React.createElement(BsFillCameraVideoFill)}</button>
       </div>
      </div>
    );
  };
  
const Tools = ({english}) => {
  return (
    <div className="toolsContainer">
    <div className="imageContainer">
      <img src={Image} alt="phone-picture" className="image2" />
    </div>
    <ToolsInformation toolsEnglish={english} tooleng={english} />
  </div>
  )
}

export default Tools