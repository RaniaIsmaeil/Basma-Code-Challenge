import React from 'react';
import "./Subscribe.css"

const Subscribe = ({english}) => {
  return (
    <div className="subscribeContainer">
      <div className="subscribeTitleContainer">
        <h1 className="codeChallengeTitle">
         {english == "English" ? "اشترك للحصول على التحديثات" : "Subscribe to get updates"}
        </h1>
        <p className="paragraphTitle">{english == "English" ? "من خلال الاشتراك ، ستحصل على نشرة إخبارية ، وعروض ترويجية ، تتناسب مع إيليت كولبا افتراضات توتام ، السابقة التي تم رفضها ، وهي عبارة عن نشرة إخبارية ، وعروض ترويجية." : "By subscribing you will get newsleter, promotions adipisicing elit Culpa assumenda totam, ex repudiandae debitis a quam numquam beatae quia ex."}
        </p>
        <input
          type="text"
          placeholder={english == "English" ? "ادخل بريدك الالكتروني" : "Enter your email"}
          className="subscribeInputText"
        />
      <button className="StartButton" >
        {english == "English" ? "اشترك" : "Subscribe"}
     </button>
      </div>
    </div>
  )
}

export default Subscribe