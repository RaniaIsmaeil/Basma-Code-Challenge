import React from 'react';
import "./SetupSteps.css";
import Download from "../../assets/download.png";
import Settings from "../../assets/settings.png";
import App from "../../assets/app.png";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const ArrowIcon = ({english}) => {
  return (
    <div className="arrowContainer">
      {english == "English" ? <MdOutlineArrowBackIos color="white" className="arrowIcon"/>
      :
      <MdOutlineArrowForwardIos color="white" className="arrowIcon"/>}
    </div>
  );
};
const Step = ({ img, title, text }) => {
  return (
    <div className="setupStepContent">
      <img src={img} alt={title} className="setupStepIcon" />
      <h3 className="setupStepTitle">{title}</h3>
      <p className="setupStepsTitleText">{text}</p>
    </div>
  );
};
const SetupSteps = ({english}) => {
  return (
    <div className='setupStepsContainer'>
    <div className="setupStepsTitleDiv">
      <h1 className="setupStepsTitle">{english == "English" ? "تحدي الكود" : "Code Challenge"}</h1>
      <p className="setupStepsTitleText">  {english == "English" ? "على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolor fuga rerum adipisci temporibus eligendi ex aliquam quo, assumenda iste atque inventore ullam amet perspiciatis! Eos deleniti dolore modi accusamus."} </p>
    </div>

    <div className={english == "English" ? "setupStepsBoxDivArabic" : "setupStepsBoxDiv"} >
      <Step
        img={Download}
        title={english == "English" ? "تثبيت التطبيق" : "Install the App"}
        text={english == "English" ? "على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit deserunt ea nemo nulla, ex cupiditate inventore."}
      />
      <ArrowIcon english={english}/>
      <Step
        img={Settings}
        title={ english == "English" ? "إعداد ملف التعريف الخاص بك" : "Setup your profile"}
        text={english == "English" ? "على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit deserunt ea nemo nulla, ex cupiditate inventore."}
      />
      <ArrowIcon english={english}/>
      <Step
        img={App}
        title={ english =="English" ? "استمتع بالميزات" : "Enjoy the features!"}
        text={english == "English" ? "على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit deserunt ea nemo nulla, ex cupiditate inventore."}
      />
    </div>
    </div>
  )
}
export default SetupSteps