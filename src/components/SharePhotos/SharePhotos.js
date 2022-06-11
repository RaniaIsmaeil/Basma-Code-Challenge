import React from 'react';
import "./SharePhotos.css";
import {RiStackFill} from "react-icons/ri";
import { FaBrush, FaCartArrowDown } from "react-icons/fa";
import { ImDroplet } from "react-icons/im";
import Image from "../../assets/thumb-2.png"

const InfoSection = ({ icon, text, infoEnglish }) => {
    return (
      <div className={infoEnglish == "English" ? "InfoSectionContainerArabic" : "InfoSectionContainer"}>
        <button className={infoEnglish == "English" ? "iconButtonsArabic" : "iconButtons"}>
            {React.createElement(icon)}
        </button>
        <span className= "paragraphTitle">{text}</span>
      </div>
    );
  };

  const LearnMoreButton = ({ title, icon, click }) => {
    return (
      <button className="learnMoreButton" onClick={click}>
        {icon ? React.createElement(icon) : ""}
        {title}
      </button>
    );
  };

const SharePhotosInfo = ({ shareEng }) => {
    return (
      <div className={shareEng == "English" ? "mainTitleArabic" : "mainTitle"}>
        <h1 className={shareEng == "English" ? "codeChallengeTitleArabic" : "codeChallengeTitle"}>{shareEng == "English" ? "شارك صورك مع الأصدقاء بسهولة" : "Share your photos with friends easily"}
        </h1>
        <InfoSection
        infoEnglish={shareEng}
        //   eng={eng}
          icon={RiStackFill}
          text={ shareEng == "English" ? "ل هذه الأفكار المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تللا أحد يرفضل" : "Fully layered dolor sit amet, consectetur adipsicing elit. Facere, nobis, id expedita dolores officiis laboriosam."}
        />
        <InfoSection
        infoEnglish={shareEng}
          icon={FaBrush}
          text={ shareEng == "English" ? "ل هذه الأفكار المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تللا أحد يرفضل" : "Fully layered dolor sit amet, consectetur adipsicing elit. Facere, nobis, id expedita dolores officiis laboriosam."}
        />
        <InfoSection
        infoEnglish={shareEng}
          icon={ImDroplet}
          text={ shareEng == "English" ? "ل هذه الأفكار المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تللا أحد يرفضل" : "Fully layered dolor sit amet, consectetur adipsicing elit. Facere, nobis, id expedita dolores officiis laboriosam."}
        />
        <InfoSection
        infoEnglish={shareEng}
          icon={FaCartArrowDown}
          text={ shareEng == "English" ? "ل هذه الأفكار المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تللا أحد يرفضل" : "Fully layered dolor sit amet, consectetur adipsicing elit. Facere, nobis, id expedita dolores officiis laboriosam."}
        />
        <LearnMoreButton title={shareEng == "English" ? "تعلم المزيد" : "Learn More" } />
      </div>
    );
  };
const SharePhotos = ({english}) => {
  return (
    <div className={english == "English" ? "mainContainerArabic" : 'mainContainer'}>
        <SharePhotosInfo shareEng={english}/>
        <div className={english == "English" ? "imageContainerArabic" : "imageContainer"}>
        <img src={Image} alt="mobile-pic" className="image3" />
      </div>
    </div>
  )
}

export default SharePhotos