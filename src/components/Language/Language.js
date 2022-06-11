import React, { useState } from 'react';
import "./Language.css";

const Language = ({lang, click}) => {
  return (
    <div className='language'>
    <div className="languageContainer" >
    <span className="languageName" onClick={click}>{lang}</span>
    </div>
    </div>
  )
}
export default Language