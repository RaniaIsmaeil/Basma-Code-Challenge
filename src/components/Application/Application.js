import React from 'react';
import "./Application.css";
import GooglePlay from "../../assets/google-play.png";
import AppStore from "../../assets/app-store.png"

  const AvilableOn = ({img, link}) => {
    return (
        <div className='playAppContainer'>
        <img src={img} alt="googlePlay/appStore " className='playAppImage' onClick={()=> window.open(link, "_blank")} />
        </div>
    )
}
const Application = ({english}) => {
  return (
    <div className="applicationContainer">
      <div className="setupStepsTitleDiv">
        <h1 className="setupStepsTitle">
         {english == "English" ? "Basma متاح لجميع الأجهزة" : "BASMA is available for all devices"}
        </h1>
        <p className="setupStepsTitleText"> {english == "English" ? "ل هذه الأفكار المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تللا أحد يرفضل ل هذه الأفكار المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تللا أحد يرفضل" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolor fuga rerum adipisci temporibus eligendi ex aliquam quo, assumenda iste atque inventore ullam amet perspiciatis! Eos deleniti dolore modi accusamus."}
        </p>
      </div>
      <div className="appPlay">
        <AvilableOn
          img={GooglePlay}
          link="https://play.google.com/store/apps"
        />
        <AvilableOn
          img={AppStore}
          link="https://www.apple.com/app-store"
        />
      </div>
      <p className="availabilityText"> {english == "English" ? "iPhone و iPad وجميع أجهزة Android متوفر على أجهزة*" : "* Available on iPhone, iPad and all Android devices"}
      </p>
    </div>
  )
}
export default Application