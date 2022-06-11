import React from "react";
import './Start.css';
import StartImage from "../../assets/thumb-1.png"

const Button = ({ Onclick, Buttontext, Buttonicon }) => {
    return (
      <button className="StartButton" onClick={Onclick}>
        {Buttontext}
      </button>
    );
  };
const Start = ({english}) => {
  return (
    <div className={english == "English" ? "mainContainerArabic" : "mainContainer"}>
        <div className={ english == "English" ? "mainTitleArabic" : "mainTitle" }>
        <h1 className="h1Title">{english == "English" ? "طريقة إبداعية لعرض تطبيقك" : "Creative way to Showcase your App"}</h1>
        <p className="paragraphTitle">
        {english == "English" ? "ن لا د أن أوضح ل أن كل هذه الأفكار المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يفض أويكره أو تجنب الشعور بالعادة، ولن بفضل هؤلاء لأشخاص الذين لا يدكون بأن العادة لا ب أن نستشعره بورة أ عقلانة ومنقية فعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو للم ولكن تجة لروف ما قد تكم اسعده فيا نتحله منكد وي" : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolore similique, enim neque esse, velit quibusdam sed dignissimos officiis odio aperiam libero incidunt magni eos sequi non consequatur molestiae eveniet aliquid."}
        </p>
        <Button Buttontext={english == "English" ? "ابدأ الان" : "Get Started"}/>
        </div>
        <div className={english == "English" ? "imageContainerArabic" : "imageContainer"} >
        <img src={StartImage} className="image" alt="phone-picture"/>
      </div>
    </div>
  );
};
export default Start;
