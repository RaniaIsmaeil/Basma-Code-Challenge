import React from 'react'
import './CodeChallenge.css'
import {MdOutlineTouchApp,MdOutlineLocationOn} from "react-icons/md";
import {IoMdFingerPrint} from "react-icons/io";
import {BiNotification}from "react-icons/bi";
import {AiOutlineSetting} from "react-icons/ai";
import {BsGlobe} from "react-icons/bs";

const CodeChallengeIcon = ({ title, icon, text }) => {
    return (
      <div className="iconsContainer">
        <div className="icons">{React.createElement(icon)}</div>
        <h4 className="iconText">{title}</h4>
        <p className="paragraphTitle">{text}</p>
      </div>
    );
  };

const CodeChallengeText = ({ text, title }) => {
    return (
      <div className="codeChallengeBox">
        <h1 className="codeChallengeTitle">{title}</h1>
        <hr color='#6b2ce2' className="codeChallengeUnderline" />
        <p className="paragraphTitle">{text}</p>
      </div>
    );
  };
  
const CodeChallenge = ({english}) => {
  return (
    <div className="codeChallengeContainer">
      <CodeChallengeText
        title={english == "English" ? "تحدي الكود" : "Code Challenge"}
        text={english == "English" ? "على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام " : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi aut reiciendis quae temporibus doloremque, molestias excepturi doloribus soluta illo consequuntur eos placeat."}
      />
      <div className={english == "English" ? "iconsSectionArabic" : 'iconsSection'}>
         <CodeChallengeIcon
          icon={MdOutlineTouchApp}
          title={english == "English" ? "تعمل بكامل طاقتها" : "Fully functional"}
          text={english == "English" ? "على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام " : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor sint nam. Reprehenderit doloremque velit fugiat."}
           />
          <CodeChallengeIcon
          icon={IoMdFingerPrint}
          title={english == "English" ? "تعمل بكامل طاقتها" : "Fully functional"}
          text={english == "English" ? "على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام " : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor sint nam. Reprehenderit doloremque velit fugiat."}
          />
          <CodeChallengeIcon
          icon={BiNotification}
          title={english == "English" ? "تعمل بكامل طاقتها" : "Fully functional"}
          text={english == "English" ? "على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام " : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor sint nam. Reprehenderit doloremque velit fugiat."}
         />
         <CodeChallengeIcon
          icon={MdOutlineLocationOn}
          title={english == "English" ? "تتبع الموقع" : "Location Tracking"}
          text={english == "English" ? "على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام " : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor sint nam. Reprehenderit doloremque velit fugiat."}
        />
        <CodeChallengeIcon
          icon={AiOutlineSetting}
          title={ english == "English" ? "إعدادات قوية" : "Powerful Settings"}
          text={english == "English" ? "على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام " : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor sint nam. Reprehenderit doloremque velit fugiat."}
        />
       <CodeChallengeIcon
          icon={BsGlobe}
          title= {english == "English" ? "متعدد اللغات" : "Multiple Language"}
          text={english == "English" ? "على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام " : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolor sint nam. Reprehenderit doloremque velit fugiat."}
        />
      </div>
    </div>
  )
}
export default CodeChallenge