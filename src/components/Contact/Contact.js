import React from 'react'
import "./Contact.css";
import House from "../../assets/form-house.svg";
import Phone from "../../assets/form-phone.svg";
import Mail from "../../assets/form-mail.svg";
import {IoIosSend} from "react-icons/io";

const ContactInfo = ({ img, text, eng }) => {
    return (
      <div className={eng == "English" ? "contactInfoContainerArabic" : "contactInfoContainer"}>
        <img src={img} className={eng == "English" ? "contactInfoImageArabic" : "contactInfoImage"}/>
        <span className="paragraphTitle">{text}</span>
      </div>
    );
  };

const Information = ({ eng }) => {
    return (
      <div className={eng == "English" ? "informationContainerArabic" : "informationContainer"}>
        <p className="paragraphTitle">{eng == "English" ? "الأفكار المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يفض أويكره أو تجنب الشعور بالعادة، " : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Comm facilis magni repudiandae molestiae sapiente dignissimos rerum accusamus dolores velit aspernatur."}
        </p>
        <ContactInfo
          eng={eng}
          img={House}
          text={eng == "English" ? "ة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف ادة البشرية" : "Vestibulum nulla libero, convallis, tincidunt suscipt diam, DC 2002"}
        />
        <ContactInfo
        eng={eng}
        img={Phone}
        text="+1 230 456 789-012 345 6789"
      />
      <ContactInfo
        eng={eng}
        img={Mail}
        text="exampledomain@domain.com"
      />
      </div>
    );
  };

const Contact = ({english}) => {
  return (
    <div className="contactContainer">
        <div className="codeChallengeBox">
        <h1 className="codeChallengeTitle">{english == "English" ? "ابق متابع" : "Stay Tuned"}</h1>
        <hr color='#6b2ce2' className="codeChallengeUnderline" />
        <p className="paragraphTitle">{english == "English" ? " الأفكار المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يفض أويكره أو تجنب الشعور بالعادة، ولن" : "By subscribing you will get newsleter, promotions adipisicing elit Culpa assumenda totam, ex repudiandae debitis a quam numquam beatae quia ex."}</p>
      </div>

      <div className={english == "English" ? "contactContentArabic" : "contactContent"} >
        <Information eng={english}/>

     <form className="formContainer" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder={english == "English" ? "اسم" : "Name"}
        className={english == "English" ? "subscribeInputText formInputArabic" : "subscribeInputText formInput"}
      />
      <input
        type="email"
        placeholder= {english == "English" ? "البريد الالكتروني" : "Email"}
        className={english == "English" ? "subscribeInputText formInputArabic" : "subscribeInputText formInput"}
      />
      <input
        type="text"
        placeholder={english == "English" ? "الموضوع" : "Subject"}
        className={english == "English" ? "subscribeInputText formInputArabic" : "subscribeInputText formInput"}
      />
      <textarea
        placeholder={english == "English" ? "الرسالة" : "Message"}
        rows="7"
        className={english == "English" ? "subscribeInputText formInputArabic" : "subscribeInputText formInput"}
      />
      <button className="StartButton">
      <IoIosSend style={{padding:"0 0.5vw", width:"1.5vw", height:"1.5vw"}}/>
        {english == "English" ? "ارسل رسالة" : "Send Message"}
      </button>
      </form>
      </div>
    </div>
  )
}

export default Contact