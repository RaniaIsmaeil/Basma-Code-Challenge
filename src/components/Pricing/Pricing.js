import React, {useState} from 'react'
import './Pricing.css';
import Bike from "../../assets/bike.png";
import MotorBike from "../../assets/motorbike.png"

const CodeChallengeText = ({ text, title }) => {
    return (
      <div className="codeChallengeBox">
        <h1 className="codeChallengeTitle">{title}</h1>
        <hr color='#6b2ce2' className="codeChallengeUnderline" />
        <p className="paragraphTitle">{text}</p>
      </div>
    );
  };

  const Card = ({ img, type, price, space, database, info, dailyBackup, eng }) => {
    return (
      <div className="cardContainer">
        <img src={img} alt={type} className="setupStepIcon" />
        <h3 className="cardType">{type}</h3>
        <h2 className="cardPrice">
         $<span className="unit">{price}</span>
        </h2>
        <hr className="cardHr" />
        <p className="cardText">{space}</p>
        <hr className="cardHr" />
        <p className="cardText">{database}</p>
        <hr className="cardHr" />
        <p className="cardText">{info}</p>
        <hr className="cardHr" />
        <p className="cardText">{dailyBackup}</p>
        <hr className="cardHr" />
        <button
          className="StartButton cardButton">
          {eng == "English" ? "اشترك" : "Sign Up"}
        </button>
      </div>
    );
  };

 const Pricing = ({english}) => {
  return (
    <div className="pricingContainer">
    <CodeChallengeText
      title={english == "English" ? "تحدي الكود" : "BASMA code Challenge"}
      text= {english == "English" ? "ذه الأفكار المغلوطة حول استنكار أن نستشعره بورة أ عقلانة ومنقية فعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو للم ولكن تجة لروف ما قد تكم اسعده فيا نتحله منكد وي.      " : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, est! Magni id doloremque alias perferendis excepturi enim odio, placeat possimus facere."}
     />
    <div className={english == "English" ? "cardsContainerArabic" : "cardsContainer"} >
      <Card
        eng={english}
        img={Bike}
        type={english == "English" ? "أساسي" : "BASIC"}
        price="49"
        space="5GB Linux Web Space"
        database="5 MySQL Databases"
        info="24/7 Tech Support"
        dailyBackup="Daily Backups"
      />
      <Card
        eng={english}
        img={MotorBike}
        type={english == "English" ? "طليعة" : "PRO"}
        price="129"
        space="10GB Linux Web Space"
        database="50 MySQL Databases"
        info="Unlimited Email"
        dailyBackup="Daily Backups"
      />
    </div>
    <p className="pricingQuestion">
      {english == "English" ? "لست متأكدا ماذا تختار؟ " : "Not sure what to choose?"}
      <a href="#" className="pricingLink">
      {english == "English" ? "اتصل بنا" : "Contact Us"}
      </a>
    </p>
  </div>
  )
}

export default Pricing